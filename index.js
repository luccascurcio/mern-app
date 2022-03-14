import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))

app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_DATABASE = 'mongodb+srv://luccascurcio:luccascurcio@cluster0.on7hy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
.catch((err) => console.log(err.message))

// mongoose.set('useFindAndModify', false);