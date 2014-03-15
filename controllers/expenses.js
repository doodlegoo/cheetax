var Receipt = require('../models/Receipt');
var ReceiptItem = require('../models/ReceiptItem');

/**
 * GET /expenses
 * Expenses page.
 */

exports.getExpenses = function(req, res) {
  var _receipts = [{id : "Facture 1", items : [ { amount : 50 }, { amount : 100 } ]}];
  Receipt.find(function (err, receipts) {
    var receiptsCountdown = receipts.length;
    for (var i = 0; i < receipts.length; i++) {
      var receipt = receipts[i];
      var receiptId = receipt.id;
      var _receipt = {
        id : receiptId,
        items : []
      };
      ReceiptItem.find({ receiptId : receiptId }, function (err, receiptItems) {
        _receipt.items = receiptItems;
        _receipts.push(_receipt);
        receiptsCountdown--;
        if (receiptsCountdown === 0) {
          console.log(_receipts);
          renderExpenses();
        }
      });
    }
    if (receiptsCountdown === 0) {
      console.log(_receipts);
      renderExpenses();
    }
  });
  function renderExpenses() {
    res.render('expenses', {
      expenses: _receipts
    });
  }
};

/**
 * POST /classifyExpenses
 * Update expense data.
 */

exports.classifyExpenses = function (req, res) {
  var data = "";
  req.on("data", function (chunk) {
    data += chunk;
  });
  req.on("end", function () {
    res.end("Received");
  });
};
