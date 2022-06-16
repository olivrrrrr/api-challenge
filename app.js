const express = require('express'); 
const app = express(); 
const PORT = 2000; 

const locationRouter = require('./routes/locationRoute'); 

app.use(express.json());

app.use('/api/locations', locationRouter);


app.listen(PORT, ()=>{
    console.log(`PORT ${PORT} is listening`); 
})

module.exports = app; 