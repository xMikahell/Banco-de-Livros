import express from "express"

const app = express()

app.use(express.json())

const livros = [
    {id: 1, "titulo": "O senhor dos Anéis"},
    {id: 2, "titulo": "O Hobbit"},
    {id: 3, "titulo": "O Silmarillion"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})

app.get('/Livros', (req, res) =>{
    res.status(200).json(livros)

})

app.get('/Livros/:id', (req, res) => {
    let index =  buscaLivro(req.params.id)
    res.json(livros[index])

})

app.post('/Livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro foi cadastrado com sucesso')
})

app.put('/Livros/:id', (req, res) => {
    let index =  buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)

})

app.delete('/Livros/:id', (req, res) => {
    let {id} = req.params
    let index =  buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)

})


function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)

}

export default app