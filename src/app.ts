import express from 'express';
import infoRouter from './routes/infoRoutes';
import { profile } from 'console';



const app = express();
const port = 8080; // Choose your desired port

// Middleware for parsing JSON requests
app.use(express.json());

// Routes
app.use('/', infoRouter);

app.listen(port, () => {
    console.log(`profile details api is running at http://localhost:${port}/api?slack_name=elysium&track=backend`);
});

export default app;
