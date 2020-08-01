const express = require('express');
const app = express();
const dotenv=require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User');
dotenv.config();
mongoose.connect(process.env.DB_CONECTION, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, },()=>console.log('connected to database'))

app.use(express.json())

app.get('/', (req, res) => {

    User.find({
        location: {
            $near: {
                $maxDistance: 80000,
                $minDistance: 0,
                $geometry: {
                    type: "Point",
                    coordinates: [90.2901121, 23.9760471]
                }
            }
        }
    }).find((error, results) => {
        if (error) console.log(error);
      //  console.log(JSON.stringify(results));
        res.json({success: true, data: results});

    });


});
app.listen(3000, ()=> console.log('Server is  running'));