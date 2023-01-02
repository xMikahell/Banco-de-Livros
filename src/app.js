import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.on("open",() => {
    console.log('Conexão feita com sucesso');
})

const app = express()
app.use(express.json())
routes(app)

export default app