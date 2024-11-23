import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRouts from './routes/auth.routs.js';
import tasksRouts from './routes/tasks.routs.js';


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


app.use('/api',authRouts);
app.use('/api',tasksRouts);


export default app;
