import express from 'express';
import mongoose from 'mongoose';

const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('server')
})


const startApp = async () => {
    try{
        app.listen(PORT, () => console.log(' server start on port ' + PORT));
    } catch (e) {
        console.log(e)
    }
}

startApp();