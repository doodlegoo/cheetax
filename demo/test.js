var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cheetax');
var db = mongoose.connection;

var data = require("./bill.json");


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  
  var bills = db.collection('bills'); 
  console.log(data);
  bills.insert(data, function(err){
   console.log(err||"done");
  });

});

