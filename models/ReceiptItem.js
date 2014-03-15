var mongoose = require('mongoose');

var receiptItemSchema = new mongoose.Schema({
	receiptId : { type: Number, unique: true},
	amount : Number
});

module.exports = mongoose.model('ReceiptItem', receiptItemSchema);
