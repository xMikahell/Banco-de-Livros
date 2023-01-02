import mongoose from "mongoose";


mongoose.connect('mongodb+srv://admin:Mikaelan1me@cursonode.rzvoiha.mongodb.net/CursoNode');

let db = mongoose.connection;

export default db