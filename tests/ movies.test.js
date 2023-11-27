const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
    // Pour l'id 1, le test vérifie le statut réponse 200
    it("should return movie id 1", async () => {
        const response = await request(app).get('/api/movies/1');
        expect(response.status).toBe(200);
    });

    // Pour l'id 1, le test vérifie le format de réponse en json
    it("should return movie id 1 type json", async () => {
        const response = await request(app).get("/api/movies/1");
        expect(response.headers["content-type"]).toMatch(/json/);
      });

      // Pour l'id 0, le test vérifie le status de réponse 404 (Not Found)
      it("should return no movie", async () => {
        const response = await request(app).get('/api/movies/0');
        expect(response.status).toBe(404);
      });
  });