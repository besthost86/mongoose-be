import express from 'express';
import registerRoutes from './services/registerRoutes.js'
import errorHandler from './services/errorHandler.js';


const app = express();
app.use(express.json());
app.use('/api/parent', await registerRoutes('../routes/parent-route.js'));
app.use('*', (req, res) => res.json({ warning: 'No such address exists' }))
app.use(errorHandler);

export { app }

