//modulos nativos
const http = require('http');
const url  = require('url');
//modulos criados
const petshop = require('./petshop')

http.createServer((req, res)=>{
                                        //trara os parametros como url  objeyo
    let urlCompleta = url.parse(req.url, true);
    let params = urlCompleta.query;
    switch (urlCompleta.pathname) {
        case '/home':
            res.writeHead(200,{ 'content-type': 'text/html; charset=utf-8' });
            res.write('olá vc esta na home o/')
            break;
        case '/adicionar':

            
            if(petshop.addPet(params.nome)){
                res.writeHead(200,{ 'content-type': 'text/html; charset=utf-8' });
                res.write('PET Adicionado');
            }else{
                res.writeHead(401,{ 'content-type': 'text/html; charset=utf-8' });
                res.write('pet não foi cadastrado')
            }
            console.log(petshop.listaPet());
            break;
        default:
            break;    
    }
    res.end();

    
}).listen(8080, 'localhost');