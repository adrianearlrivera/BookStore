import express, { response } from "express";
import mongoose from "mongoose";
import {PORT, mongoDBURL} from "./config.js";
// import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/bookRoute.js";
import cors from 'cors';
import { Book } from "./models/bookModels.js";
const app = express();


//MIDDLEWARE TO PARSE THE REQUEST BODY
app.use(express.json());

//MIDDLEWARE FOR HANDLING THE CORS POLICY (ALLOWS ALL ORIGINS)
app.use(cors());

//MIDDLEWARE FOR HANDLING THE CORS POLICY (ALLOWS CUSTOM ORIGINS)
// app.use(
    
// cors({import { Book } from "./models/bookModels.js"});

app.get('/', (request, response)=> {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books',booksRoute);

// app.post('/books', async (request, response)=> {
//     try {
//         if (
//             !request.body.title||
//             !request.body.author||
//             !request.body.publishYear
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: title, author,publishYear'
//             });
//         }
//         const newBook = {
//             title: request.body.title,
//             author: request.body.author,
//             publishYear: request.body.publishYear,
//         };
//         const book = await Book.create(newBook);
//         return response.status(201).send(book);
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({message: error.message});
//     }
// });

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
    });