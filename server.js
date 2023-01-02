import app from './src/app.js'
const port = process.env.PORT || 3000



//Não queria perder o codigo por isso não apaguei
//const rotas = {
//    '/': 'Curso de Node',
//    '/livros': 'Entrei na pag de livros',
//    '/autores': 'Listagens de autores',
//    '/editora': 'Pagina da editora',
//    '/Sobre': 'Informações sobre o projeto'
//}

//const server = http.createServer((req, res) =>{
//    res.writeHead(200, {'Content-type': 'text/plain'})
//    res.end(rotas[req.url])
//})


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);

})

