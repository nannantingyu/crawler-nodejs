const moment = require('moment');
const WebSocket = require('ws');
const pako = require('pako');
const WS_URL = 'wss://api.huobi.pro/ws';
var orderbook = {};
var ws_server = null, ws_client = null, client_socket = null;
var app = require('http').createServer(handler);
app.listen(8088);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

function init_client() {
    ws_client = require('socket.io')(app);
    var fs = require('fs');

    ws_client.on('connection', function (socket) {
        client_socket = socket;
        console.log("client connented");

        socket.on("kline_data", function(data) {
            console.log("need kline_data");
            ws_server.send(JSON.stringify({
                "req": `market.btcusdt.kline.1min`,
                "id": `btcusdt`,
                "from": parseInt((Date.now()-100*60*1000)/1000),
                "to": parseInt(Date.now()/1000)
            }));
        });
    });

    ws_client.on('close', function() {
        ws_client = null;
        init_client();
    });

    ws_client.on('error', function() {
        ws_client = null;
        init_client();
    });
}

function init_server() {
    ws_server = new WebSocket(WS_URL);
    ws_server.on('open', () => {
        subscribe(ws_server);
    });
    ws_server.on('message', (data) => {
        if(client_socket) {
            let text = pako.inflate(data, { to: 'string'}),
                msg = JSON.parse(text);

            if (msg.ping) {
                ws_server.send(JSON.stringify({
                    pong: msg.ping
                }));
            }
            else if (msg.tick) {
                //实时行情
                let symbol = msg.ch.split('.')[1];
                let channel = msg.ch.split('.')[2];
                switch (channel) {
                    case 'depth':
                        break;
                    case 'kline':
                        client_socket.emit(`tick_client`, msg);
                        break;
                }
            }
            else if(msg.data){
                //历史数据
                console.log(msg.data);
                client_socket.emit(`history`, msg);
            }
        }
    });
    ws_server.on('close', () => {
        ws_server = null;
        init_server();
    });
    ws_server.on('error', err => {
        ws_server = null;
        init_server();
    });
}

exports.OrderBook = orderbook;
function subscribe(ws) {
    var symbols = ['btcusdt'];
    // 订阅K线
    for (let symbol of symbols) {
        ws.send(JSON.stringify({
            "sub": `market.${symbol}.kline.1min`,
            "id": `${symbol}`
        }));
    }
}

init_client();
init_server();
