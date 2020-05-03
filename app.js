var http = require('http');

http.createServer(function (req, res) {
	var get_ip = require('ipware')().get_ip;
	var ip_info = get_ip(req, right_most_proxy=true);
	res.setHeader('Content-Type', 'application/json');
	payload = [req.headers, ip_info];
	res.end(JSON.stringify({request: payload}));
}).listen(8080); 

