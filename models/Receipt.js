var mongoose = require('mongoose');

var receiptSchema = new mongoose.Schema({
	id : { type: String, unique: true },
	date : String,
	time : String,
	receiptItems : [Number],
	total : Number
});

module.exports = mongoose.model('Receipt', receiptSchema);

