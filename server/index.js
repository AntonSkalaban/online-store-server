import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import ProductRouter from './router/ProductRouter.js'
import CategoryRouter from './router/CategoryRouter.js'

const PORT = 3000;
const DB_URL = 'mongodb+srv://antonskalaban99:online-store-password@cluster0.jvo9axa.mongodb.net/'

const app = express();

app.use(express.json());
app.use(
    cors({
        origin:'*', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200,
    })
  );
app.use('/', ProductRouter);
app.use('/', CategoryRouter);

const startApp = async () => {
    try{
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => console.log('server start on port ' + PORT));
    } catch (e) {
        console.log(e)
    }
}

startApp();