const request = require("supertest");
const app = require("./app");

describe("Order API", () => {
  it("GET /getOrderFromLastDay --> All orders from last day", () => {
    return request(app)
      .get('/getOrderFromLastDay')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title:expect.any(String),
                    description:expect.any(String),
                    content:expect.any(String),
                    time:expect.any(Date),
                })
            ])
        )
      });
  });

  it("POST /newOrder --> new Order", () => {});
});
