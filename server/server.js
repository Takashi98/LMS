import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import {connectDB} from './configs/mongodb.js';

// express

const app = express();

// connect to dataBase

await connectDB();

// middlewares

app.use(cors())

// routes 

app.get('/', (req, res) => res.send('api is working'));

// Port

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})