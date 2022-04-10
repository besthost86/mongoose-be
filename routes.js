const Router = require('express');
const Person = require('./models/Person.js')
const Story = require('./models/Story.js')
const mongoose = require('mongoose');

const router = Router();


router.get('/', (req, res) => {
    res.send('...strona testowa mongoose');
    
})

router.get('/p',async (req, res)=>{
    
    const person = await Person.create({name: "Max Scharzenburger", age: 41});
    res.status(200).json(person)
})

router.get('/s',async (req, res)=>{
    
    const story = await Story.create({title: "Three Little Pigs", author: { _id: "624cbd1c18cb7270d3896874"}});
    res.status(200).json(story)
})

router.get('/test',async (req, res)=>{
    
    const story = await Story.findOne({title: "Three Little Pigs"}).populate('author',{age: 1})
    res.status(200).json(story)
})

router.get('/find',async (req, res)=>{
   
    const docs = await Person.find();
    res.status(200).json(docs)
})

router.get('/up',async (req, res)=>{
   
    const session = await Person.startSession();
    await mongoose.connection.transaction(async function setNewFields(session) {
         await Person.updateMany({}, {city: "Mexico"}, {session});
    })
    session.endSession();
    res.status(200).json('Succes session ended')
})

router.use((err, req, res, next) => {
    res.status(400).json({Error: err});
})

module.exports = router