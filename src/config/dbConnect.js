import mongoose from "mongoose";

mongoose.connect("mongodb+srv://IzabelaFranca:123@crud-livraria.ygfn6uy.mongodb.net/livraria")

let db = mongoose.connection;

export default db;