const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query{
        obtenerProyectos: [Bebe]
        
    }
    
    type Bebe{
        nombre: String
        id: ID
    }
    

    input AutenticarInput {
        correo: String!
        clave: String!
    }
    
    type Token {
        token: String
    }
    

    input UsuarioInput{
        correo: String!
        nombre: String!
        apellidoPaterno: String!
        apellidoMaterno: String!
        sexo: String!
        region: String!
        ciudad: String!
        clave: String!
    }

    type Mutation{
        crearUsuario(input: UsuarioInput): String
        autenticarUsuario(input: AutenticarInput) :Token
    }
`;

module.exports = typeDefs;