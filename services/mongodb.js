import mongoose from 'mongoose';

const onConnect = () => {
    console.log('mongo connected...');
}

const onConnectError = (error) => {
    console.log('mongoConnection: Error ', error);
}

mongoose.connection.on('error', (err) => {
    onConnectError(err);
})

export const connectDataBase = () => {
    mongoose.connect(process.env.DATABASE_URL).then(onConnect, onConnectError);
}