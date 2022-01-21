// importando o módulo http 
const http = require('http');
const host = 'http://localhost';
const port = 3000;
const status = require('./pcRamUsage.js');

//Criando servidor
http.createServer((req,res)=>{
    let url = req.url;

    if(url === '/status'){
        res.end(JSON.stringify(status, null, 2));
    }else{
        res.end(`<h1>Seja bem vinde</h1>`)
    }
    
}).listen(3000, () => console.log(`Server is running in ${host}:${port}`));
