import express from 'express';
import * as net from 'net';
import * as WebSocket from 'ws';

const app = express();

const listenPort = 8080;
const server = net.createServer((socket)=>{
    console.log("Connect: ",socket.remoteAddress+":"+socket.remotePort);

    socket.on('data',(data)=>{
        console.log("Receive data:",data);
    })

    socket.on('error',(err)=>{
        console.log('Socket err:',err);
    })

    socket.on('close',(data)=>{
        console.log('Socket client close:',data);
    })
}).listen(listenPort);

//服务器监听事件
server.on('listening',function(){
    console.log("Server listening:" + server.address().port);
});
//服务器错误事件
server.on("error",function(exception){
    console.log("Server error:" + exception);
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});