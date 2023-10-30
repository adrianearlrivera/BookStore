import express, { response } from "express";
import mongoose from "mongoose";
import {PORT, mongoDBURL} from "./config.js";
import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/bookRoute.js"
const app = express();


//MIDDLEWARE TO PARSE THE REQUEST BODY
app.use(express.json());

//MIDDLEWARE FOR HANDLING THE CORS POLICY (ALLOWS CUSTOM ORIGINS)
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         methods: ['GET','POST','PUT','DELETE'],
//         allowHeaders: ['Content-Type'],
//     })
// )
app.get('/', (request, response)=> {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books',booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App has connected to the database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: http://localhost:${PORT}/`);
        });
    })
    .catch((error) => {
        console.log(error);
    })