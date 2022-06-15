import dotenv from 'dotenv';
import { app } from './app.js';
import { connectDataBase } from './services/mongodb.js';

dotenv.config();

app.listen(process.env.PORT = 5001, () => {
    console.log(`listening on port...${ process.env.PORT}`);
    connectDataBase();
})


