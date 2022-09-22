const request = require("supertest");
const app = require("./app");

describe("Orders API", () => {
  it("GET /getOrderFromLastDay --> array orders", () => {
    return request(app)
      .get("/getOrderFromLastDay")
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body);
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            description: expect.any(String),
            content: expect.any(String),
          }),
        ]);
        /*I checked if the 'getOrderFromLastDay' function contains json
         that contains the object with the 
         correct values(title - string ,description-string etc.. ) */
      });
  });

  it("POST /newOrder --> Data inserted", () => {
    return request(app)
      .post("/newOrder")
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body);
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            description: expect.any(String),
            content: expect.any(String),
          }),
        ]);
      });
  });
});
