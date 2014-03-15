var Receipt = require('../models/Receipt');
var ReceiptItem = require('../models/ReceiptItem');

/**
 * GET /expenses
 * Expenses page.
 */

exports.getExpenses = function (req, res) {
    res.render('expenses',
    {
      "expenses": [
        {
          "store_name" : "IGA",
          "date" : "25 février 2014",
          "tax" : [
            {
              "tax" : "1234091873510895"
            },
            {
              "tax" : "12304971509871345918"
            }
          ],
          "item" : [
            {
              "item_name" : "24-pack Bukweiser",
              "item_price" : 27.99
            },
            {
              "item_name" : "Kleenex",
              "item_price" : 1.20
            },
            {
              "item_name" : "Redbull",
              "item_price" : 2.99
            },
            {
              "item_name" : "Gaz",
              "item_price" : 70.00
            }
          ]
        },
        {
           "store_name" : "Bureau en Gros",
           "date" : "24 février 2014",
           "tax" : [
             {
               "tax" : "19013274037651"
             },
             {
               "tax" : "123409747623598176"
             }
           ],
           "item" : [
             {
               "item_name" : "500 feuilles blanches",
               "item_price" : 4.99
             },
             {
               "item_name" : "Cartouche d'ence HP A98",
               "item_price" : 47.98
             },
             {
               "item_name" : "3-license 1 an Kaspersky Pure 3.0",
               "item_price" : 200.00
             }
           ]
         }
      ]
    });
};

exports.getExpenses2 = function(req, res) {
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
