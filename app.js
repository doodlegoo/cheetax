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

var server = app.listen(1337, function () {
	console.log("Server listening on port %d", server.address().port);
});

