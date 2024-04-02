const { response } = require('express')

const donacion = require('../model/donaciones')

const getDonacion = async (req, res) => {
    const donaciones = await donacion.find();//Obtener todos los documentos de una coleccion
    res.json({
        msg: donaciones
    })
};

const postDonacion = async (req, res) => {
    const datos = req.body //capturar datos de la postman

    let mensaje = 'Inserción exitosa'
    try {

        const usuarios = new donacion(datos)
        await usuarios.save()

    } catch (error) {

        mensaje = error
        console.log(error)

    }

    //guarda en la base de datos
    res.json({
        msg: mensaje
    })
}
const putDonacion = async (req, res) => {
    const {
        idDonacion,
        idDonante,
        tipoDonacion,
        cantidad,
        gramaje,
        tipo,
        fechaDonado,
        fechaRegistroDonacion,
        test2
    } = req.body; //desestructurar
    try {
      const donante = await donacion.findOneAndUpdate(
        { idDonacion: idDonacion },
        {
            idDonante: idDonante,
            tipoDonacion: tipoDonacion,
            cantidad: cantidad,
            gramaje: gramaje,
            tipo: tipo,
            fechaDonado: fechaDonado,
            fechaRegistroDonacion: fechaRegistroDonacion,
            test2: test2
        }
      ) //las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
      mensaje = "actualizacion exitosa"
    } catch (error) {
      mensaje = error
    }
    res.json({
      msg: mensaje
    });
  };

const deleteDonacion = async (req, res) => {
    const {idDonacion} = req.params;
    let mensaje = 'Eliminación exitosa'
    try {
        const donante = await donacion.findOneAndDelete({idDonacion: idDonacion})
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg:mensaje
    });
};

module.exports = {
    getDonacion,
    postDonacion,
    putDonacion,
    deleteDonacion
}