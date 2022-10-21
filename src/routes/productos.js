const express = require("express");
const productoSchema = require("../models/productos");

const router = express.Router();


//crear producto
router.post("/productos", (req, res) => {
  try{
    const producto = productoSchema(req.body);
    producto
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//obtener productos
router.get("/productos", (req, res) => {
  try{
    productoSchema
      .find() 
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//obtener producto por ID
router.get("/productos/:id", (req, res) => {
  try{
    const { id } = req.params;
    productoSchema
    .findById(id) 
    .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//actualizar producto
router.put("/productos/:id", (req, res) => {
  try{
    const { id } = req.params;
    const { name, sku, stock, sucursal, precio, status} = req.body;
    productoSchema
      .updateOne({ _id: id}, {$set: {name, sku, stock, sucursal, precio, status} }) //encontrar por id
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//eliminar producto
router.delete("/productos/:id", (req, res) => {
  try{
    const { id } = req.params;
    productoSchema
      .remove({ _id: id})
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

module.exports = router;