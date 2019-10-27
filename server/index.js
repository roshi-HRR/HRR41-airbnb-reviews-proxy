let express = require('express');
let app = express();
let proxy = require('http-proxy-middleware');
let port = 9900;

//Brian
app.use(proxy('/api/houses', {target: 'http://localhost:3006'}));
//
app.use(proxy('/house', {target: 'http://localhost:3002'}));
app.use(express.static('public'));

app.listen(port, () => console.log(`Proxy server running on port ${port}`));