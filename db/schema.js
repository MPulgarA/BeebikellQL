const {gql} = require ('apollo-server');


const typeDefs = gql`

type Curso{
    titulo: String
    tecnologia: String
}

type Query{
 obtenerCursos : [Curso]
}

input UsuarioInput {
    correo: String!
    nombre: String!
    apellidoPaterno: String!
    apellidoMaterno: String!
    sexo: String!
    region: String!
    ciudad: String!
    clave: String!
}

input AutenticarInput {
    correo: String!
    clave: String!
}

type Token {
    token: String
}

type Mutation {
    crearUsuario(input: UsuarioInput): String 
    autenticarUsuario(input: AutenticarInput) :Token
}
`;

module.exports = typeDefs;