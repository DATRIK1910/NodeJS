import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import { request } from "express";
import cors from 'cors';
import connectDB from "./config/connectDB";
require('dotenv').config();

let app = express();



app.use(cors({ credentials: true, origin: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;


app.listen(port, () => {
    console.log("Backend Nodejs is runing on the port : " + port)
})