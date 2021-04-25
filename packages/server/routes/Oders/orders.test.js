
const Orders = require("./orders");
const express = require("express");
const app = express();

const request = require("supertest")(app);

app.use(express.urlencoded({ extended: false }));
app.use("/", Orders);

describe("Orders", () => {
    it("gets the test endpoint", async done => {
        const response = await request.get("/");

        console.log(JSON.stringify(response.body));
        expect(response.status).toBe(200);
        done();
    });

    it('Adds new recored in firebase', async done => {
        const data = {
            "address": {
                "city": "Mumbai unit test",
                "country": "UK",
                "street": "Queens street",
                "zip": "75008"
            },
            "bookingDate": new Date().toUTCString(),
            "customer": {
                "email": "testgami@gmail.com",
                "name": "Caballero",
                "phone": "+91-82398473"
            },
            "title": `call from unit test at ${new Date().toUTCString()}`

        }
        const response = await request.post('/').send(data)

        expect(response.status).toBe(200);
        done();

    })
})