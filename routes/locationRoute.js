const express = require('express'); 
const locationRouter = express.Router(); 


locationRouter.get("/", (req, res)=>{ 

    return res.json({message: "hello"})

})


locationRouter.get("/", (res, req)=>{ 

    try{

        const regex = new RegExp('[A-Za-z][1-9] [1-9][A-Za-z]{2}')
        if(postcode.match(re)){

            let postcode = req.params.location 

            let query = `https://6kb2p9kgb0.execute-api.eu-west-2.amazonaws.com/production/api/v1/addres ses/?postcode=${postcode}`

        }

    } catch(error){

        return res.json({error: error.message}); 
    }

})

module.exports = locationRouter; 