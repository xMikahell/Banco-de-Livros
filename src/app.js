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

app.post('/Livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro foi cadastrado com sucesso')
})


export default app