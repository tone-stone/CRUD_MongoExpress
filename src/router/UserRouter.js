//Enrutamiento para cuando utilizamos controladores

const UserRouter = require("express").Router();
const UserCtrl = require("../controller/UserCtrl");

UserRouter.get("/user", UserCtrl.getUser);

UserRouter.post("/newUser", UserCtrl.createUser);

module.exports = UserRouter;
