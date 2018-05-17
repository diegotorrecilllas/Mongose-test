var express = require('express');
const Mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  Mongoose.connect('mongodb://localhost/academy');
  let userSchema = Mongoose.Schema({
    firstName:String,
    lastName:String,
    create: Date
  })
  let User = Mongoose.model('User',userSchema);
  let docUser= new User({
    firstName:"Xavi",
    lastName:"Rodriguez"
  });
  docUser.save(err=>{
    if(err) console.log(err);
    console.log("Ok todo correcto");
  })
});

module.exports = router;
