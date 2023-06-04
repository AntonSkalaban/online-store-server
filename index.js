import express from 'express';
import mongoose from 'mongoose';

const PORT = 3000;
const DB_URL = 'mongodb+srv://antonskalaban99:online-store-password@cluster0.jvo9axa.mongodb.net/'

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('server')
})


const startApp = async () => {
    try{
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => console.log(' server start on port ' + PORT));
    } catch (e) {
        console.log(e)
    }
}

startApp();