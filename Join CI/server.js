var express=require("express"),
	app=express(),
	mongojs=require("mongojs"),
	db=mongojs("register",["registerlist"]),
	bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get("/register",function(request,response) {
	


	db.registerlist.find(function(err,data) {
		console.log(data);
		response.json(data);
	});
});
app.post("/register" , function(req , res) {
	console.log(req.body);
	db.registerlist.insert(req.body, function(err , data) {
		res.json(data);
	})
})
app.listen(3000,function() {
	console.log("Server running on port 3000");
})