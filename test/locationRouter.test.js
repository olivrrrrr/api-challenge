const express = require('express'); 

const request = require('supertest'); 

const app = require('../app'); 


describe("Integration tests", ()=> {

    it("GET - success - should give an array of json", ()=> 
{

    return request(app).get("/api/locations").then(response=> {
        expect(response).toBe(200); 

        expect(response).toEqual(
            expect.arrayContaining([
                expect.objectContaining({

                })
            ]
            )
        )

        expect(response).toBe('Content-Type', /json/)
    })

})

    it("GET - failure - should display error message", ()=>{
        return request(app)
        .get("/api/locations")
        .then(response =>
            expect(response).toEqual({error: "This postcode is invalid"})
            ); 
    })


})