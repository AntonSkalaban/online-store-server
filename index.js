import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import ProductRouter from './router/ProductRouter.js';
import CategoryRouter from './router/CategoryRouter.js';

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use('/', ProductRouter);
app.use('/', CategoryRouter);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log('server started on port ' + PORT));
  } catch (e) {
    console.log(e);
  }
};

startApp();
