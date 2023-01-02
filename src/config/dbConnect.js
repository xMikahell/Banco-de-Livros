import mongoose from "mongoose";


mongoose.connect(`mongodb+srv://MONGODB_USERNAME:MONGODB_PASSWORD@cursonode.rzvoiha.mongodb.net/CursoNode`); //eu sei que vai dar error 

let db = mongoose.connection;

export default db