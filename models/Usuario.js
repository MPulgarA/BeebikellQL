const mongoose = require ('mongoose');

const UsuariosSchema = mongoose.Schema({
    correo:{
        type:String,
        require:true,
        trim:true,
        unique: true
    },
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    apellidoPaterno:{
        type:String,
        require:true,
        trim:true
    },
    apellidoMaterno:{
        type:String,
        require:true,
        trim:true
    },
    sexo:{
        type:String,
        require:true,
        trim:true
    },
    region:{
        type:String,
        require:true,
        trim:true
    },
    ciudad:{
        type:String,
        require:true,
        trim:true
    },
    clave:{
        type:String,
        require:true,
        trim:true
    },
    registro:{
        type:Date,
        default:Date.now()
    } 
});

module.exports = mongoose.model('Usuario',UsuariosSchema);