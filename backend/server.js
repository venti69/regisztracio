require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
// User model létrehozása
const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('user', UserSchema);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
app.post('/register', async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body);
    
    try {
        res.status(200).json({msg: 'Sikeres regisztráció!'});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
})