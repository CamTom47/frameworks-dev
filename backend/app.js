import express from "express";
import helmet from "helmet";
import cors from "cors";
import messageRouter from './routes/messages.js'


const app = express();
const router = express.Router();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/message', messageRouter)

export default app;
