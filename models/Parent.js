import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const parentSchema = Schema({
    children: [
        { name: String }
    ]
})

export default model('Parent', parentSchema)