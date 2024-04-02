const {Schema, model} = require('mongoose');

const DonacionesSchema = ({
    idDonacion:{
        type:Number,
        required:[true, 'El Id donación es requerido es requerido'],
        unique:true
    },
    idDonante:{
        type:Number,
        required:[true, 'El Id Donante es requerido']
    },
    tipoDonacion:{
        type:String,
        required:[true, 'El tipo de donación es requerido'],
        enum:['Dinero', 'Alimentos', 'Viaje', 'Tratamiento', 'Medicamentos']
    },
    cantidad:{
        type:Number,
        required:[true, 'La cantidad es requerida']
    },
    gramaje:{
        type:String
    },
    tipo:{
        type:String,
        required:[true, 'El tipo es requerido'],
    },
    fechaDonado:{
        type:String,
        required:[true, 'La fecha de donación es requerida']
    },
    fechaRegistroDonacion:{
        type:String,
        required:[true, 'La fecha de registro es requerida']
    },
    test2: {
        type: String,
        required: [true, 'El test2 es requerido']
    }
});

module.exports = model('donaciones', DonacionesSchema);