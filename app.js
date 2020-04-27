var http = require('http');

http.createServer(function (req, res) {
	var get_ip = require('ipware')().get_ip;
	var ip_info = get_ip(req, right_most_proxy=true);
	// res.writeHead(200, {'Content-Type': 'text/html'});
	res.setHeader('Content-Type', 'application/json');
//	res.end('You is is: ' + ip_info['clientIp']);
	//
	res.end(JSON.stringify(req.headers) + JSON.stringify(ip_info));
}).listen(8080); 

