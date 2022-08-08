const app = require('../app');
const models = require('../db/conn');
const request = require('supertest');

afterAll((done) => {
  models.instance.meetups_by_city.delete({ meetup_city: "testCity" })
  done()
})

beforeAll((done) => {
  done()
})

test("should sucessfully add a row to database and respond with a 201 status code", async () => {
  const details = {
    title: "test",
    imageurl: "https://assets.website-files.com/5feac9d1cc32ae279e536778/601a780f9ff10b04beb1ce21_10%20Best%20Practices%20for%20Software%20Testing%20Projects.png",
    date: "DD-MM-YYYY",
    city: "testCity",
    address: "testAddress",
    description: "Its a test, you can avoid it"
  }
  try {
    const response = await request(app).post("/add-new-meetup").send(details)
    expect(response.statusCode).toBe(201)
    done()
  } catch (err) {
    expect(err).toBe(err);
  }
})

test("should return list of all cities", async () => {
  try {
    const response = await request(app).get("/cities")
    expect(response.statusCode).toBe(200)
    expect(response.body.length != 0).toBe(true)
    done()
  } catch (err) {
    expect(err).toBe(err);
  }
})

test("should return all details about testCity meetups", async () => {
  try {
    const response = await request(app).get("/cities/testCity")
    expect(response.statusCode).toBe(200)
    expect(response.body.length != 0).toBe(true)
    done()
  } catch (err) {
    expect(err).toBe(err);
  }
})

