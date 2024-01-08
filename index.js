require('dotenv').config()
const express = require('express')
const app = express ()
const morgan = require('morgan')
const mongoose= require('mongoose')
const {Port , DATABASE_URL}  = process.env
const cors = require('cors')
const travelSchema = new mongoose.Schema({
    name : { type: String, unique: true },
    description : String,
    date: Date ,
    data : Buffer,
    pin :  Number,
})

const Travel = mongoose.model('Travel' , travelSchema)

mongoose.connect(DATABASE_URL)
mongoose.connection
.on("open" ,() => console.log('Connected to db'))
.on("Close" ,() => console.log('Disonnected from db'))
.on("Error" ,(Error) => console.log('Error connecting to db'))

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

app.get('/diaries/:id' , async (req , res) => {
    const diaryId = req.params.id;

    try {
        const diary = await Travel.findById(diaryId);
        
        if (!diary) {
            return res.status(404).json({ message: 'Diary not found' });
        }

        res.json(diary);
    } catch (error) {
        res.status(400).json(error);
    }
})

// GET ROUTE
app.get('/diaries' , async (req , res) => {
    try {
        const diaries = await Travel.find({});
        res.json(diaries);
    } catch (error) {
        res.status(400).json(error)
    }
});
// POST ROUTE
app.post('/diaries', async (req, res) => {
    const { name, description, date, data, pin } = req.body;
    
    try {
        // Check if the name already exists
        const existingTravel = await Travel.findOne({ name });

        if (existingTravel) {
            return res.status(400).json({ error: `Choose a different name that hasn't been used` });
        }

        // Create a new travel entry
        const newTravel = new Travel({
            name,
            description,
            date,
            data,
            pin,
        });

        // Save the new travel entry
        const savedTravel = await newTravel.save();

        res.status(201).json(savedTravel);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.put("/diaries/:id", async (req , res) => {
    try {
        res.json(
            await Travel.findByIdAndUpdate(req.params.id , req.body , {new: true})
        )
    } catch (Error) {
        res.status(400).json(Error)
    }
})

app.delete("/diaries/:id" , async (req , res) => {
    try {
        const {pin , name} = req.body
        const matchinDiary = await Travel.find({pin , name})
        if (matchinDiary) {
            return res.status(400).json({ error: `WRONG PIN` });
        }
        const result = await Travel.findOneAndDelete(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error)
    }
})

app.listen(Port, () => console.log(`listening on port ${Port}`) )