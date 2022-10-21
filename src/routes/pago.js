const express = require("express");
const pagoSchema = require("../models/pago");
const router = express.Router();

// crear pago
router.post("/pagos", (req, res) => {
  try{
    const pago = pagoSchema(req.body);
    pago
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


// obtener pagos
router.get("/pagos", (req, res) => {
  try{
    pagoSchema
      .find()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

//actualizar pago
router.put("/pagos/:id", (req, res) => {
  try{
    const { id } = req.params;
    const { name, codigo} = req.body;
    pagoSchema
      .updateOne({ _id: id}, {$set: {name,codigo} })
      .then((data) => res.json(data))
  }catch(error){
    res.json({message:error});
  }
});


//eliminar
router.delete("/pagos/:id", (req, res) => {
  try{
    const { id } = req.params;
    pagoSchema
      .remove({ _id: id})
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

module.exports = router;