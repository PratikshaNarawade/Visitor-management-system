import express from "express";
import pool from "./config/db-config.js";
import router from "./routes/route.js";
const app = express();
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(router);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header('Access-Control-Allow-Origin', 'https://66291d9700052804bcdf08d9--zesty-biscuit-2cc4d6.netlify.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(8080, () => {
    console.log("Server started on 8080");
})