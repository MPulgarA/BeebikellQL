const {ApolloServer, gql} = require('apollo-server');

const Usuario = require('../models/Usuario');

const jwt = require('jsonwebtoken');

require('dotenv').config({path: 'variables.env'});

const bcryptjs = require('bcryptjs');

const typeDefs = require('./schema');

const crearToken = (usuario, secreta, expiresIn) => {
    console.log(usuario);
   const {id,correo} = usuario;

   return jwt.sign({id,correo}, secreta, {expiresIn});
}

const resolvers = {
    Mutation: {
        crearUsuario: async (_,{input}, ctx) =>{
            const {correo, clave} = input;

            const existeUsuario  = await Usuario.findOne({correo});

            if(existeUsuario ){
                throw new Error ("El usuario ya se encuentra registrado");
            }

            try {

                const salt = await bcryptjs.genSalt(10);
                input.clave = await bcryptjs.hash(clave, salt);
                
                const nuevoUsuario = new Usuario(input);
                console.log(nuevoUsuario);

                nuevoUsuario.save();
                return "Usuario creado correctamente";

            } catch (error) {
                console.log(error);
            }

        },
        
        autenticarUsuario: async (_,{input}) => {
            const {correo,clave} = input;

            // revisar si el usuario existe

            const existeUsuario = await Usuario.findOne({correo});
        
            if(!existeUsuario){
               throw new Error ("El usuario no existe");

            } 
            // revisar si el password es correcto
            const passwordCorrecto = await bcryptjs.compare(clave,existeUsuario.clave);
            if(!passwordCorrecto){
                throw new Error ("Las credenciales ingresadas no son correctas");
            }
            // dar acceso a la app
            return {
                token: crearToken(existeUsuario,process.env.SECRETA,'24hr')
            }

        }
    }

}

module.exports = resolvers;