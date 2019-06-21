const func = require('./func');
const os = require('os');
const fs = require('fs');
const http = require('http');
const moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('Hello world');
//         res.end();
//     }
//     if(req.url === '/api/users'){
//         res.write(JSON.stringify([
//             {name: 'Some'},
//             {name: 'Some1'},
//             {name: 'Some2'},
//         ]));
//         res.end()
//     }
// });
// server.on('connection', () => {
//     console.log('New connection');
// });
// server.listen(3000);
// console.log('Server started at port 3000...');
// fs.writeFile('some.txt', 'i`m new string', (err) => {
//     if(err){
//         console.log(err);
//     }
// })
// fs.readFile('some.txt', 'utf8', (err, data) => {
//     console.log(data);
// })
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());

// console.log(func(50));