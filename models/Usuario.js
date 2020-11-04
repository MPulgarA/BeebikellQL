const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    correo:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true,
        trim: true,        
    },
    apellidoPaterno:{
        type: String,
        required: true,
        trim: true,   
    },
    apellidoMaterno:{
        type: String,
        required: true,
        trim: true,   
    },
    sexo:{
        type: String,
        required: true,
        trim: true,   
    },
    region:{
        type: String,
        required: true,
        trim: true,   
    },
    ciudad:{
        type: String,
        required: true,
        trim: true,   
    },
    clave:{
        type: String,
        required: true,
        trim: true,   
    },
    registro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);