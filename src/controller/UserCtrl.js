//controladores - forma avanzada de crear rutas

const User = require("../models/user");

const UserCtrl = {
  getAuthor: async (req, res) => {
    try {
      const { id } = req.params;
      let user = User.findById(id);
      if (!author) {
        return res.status(404).send({
          success: false,
          message: "Usuario no encontrado!",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Usuario encontrado!",
        author,
      });
    } catch (error) {
      return res.status(200).send({
        success: false,
        message: error.message,
      });
    }
  },
  createUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      let author = new User({
        name,
        email,
        age,
      });
      user.save();
      return res.status(200).send({
        success: true,
        message: "usuario creado!",
        user,
      });
    } catch (error) {
      return res.status(200).send({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = UserCtrl;
