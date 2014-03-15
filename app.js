var express = require("express");
var app = express();

app.post("/uploadReceipt", function (req, res) {
	var data = "";
	req.on("data", function (chunk) {
		data += chunk;
	});
	req.on("end", function () {
		console.log("Receipt uploaded: %s", data);
		res.send("Thanks for your receipt.");
	});
});

app.get("/receiptItems", function (req, res) {
	// parse the query string for the ID
	res.send("Receipt items");
});

app.post("/classifyReceipts", function (req, res) {
	var data = "";
	req.on("data", function (chunk) {
		data += chunk;
	});
	req.on("end", function () {
		console.log("Classified receipt items: %s", data);
		res.send("Your items have been classified.");
	});
});

app.get("/summary", function (req, res) {
	// find an image of a report
	res.send("See your questionnaire to get a more complete version of your report");
});

var server = app.listen(1337, function () {
	console.log("Server listening on port %d", server.address().port);
});

