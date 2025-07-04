const express = require("express");
const router = express.Router();
const {{moduleName}} = require("@middlewares/{{moduleName}}");
const {{moduleName}}Controller = require("@modules/{{moduleName}}/Controllers/{{moduleName}}Controller");
const { uploadFile } = require("recharge-utils");

// router.get("/{{moduleName}}", {{moduleName}}Controller.index);





// if custom route create define here like
// const routeName = require('./routeName');
// router.use('',routeName);


module.exports = router ;
