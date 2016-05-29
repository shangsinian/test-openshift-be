var thrift = require("thrift");
var CalService = require("./thrift/gen-nodejs/CalService");
var ttypes = require("./thrift/gen-nodejs/Cal_types");

var server = thrift.createServer(CalService, {
	add: function(num1, num2, result) {
		console.log(`${num1} + ${num2}`)
		var r = num1 + num2
		result(null,r);
	}
});

server.listen(10000);
console.log('Search server is worked on 10000');
