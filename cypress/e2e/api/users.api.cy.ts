const API = Cypress.env("apiUrl");

describe("API · /users (JSONPlaceholder)", () => {
  it("GET /users devuelve 200 y una lista de 10 usuarios", () => {
    cy.request("GET", `${API}/users`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array").with.length(10);
      expect(res.body[0]).to.have.all.keys(
        "id",
        "name",
        "username",
        "email",
        "address",
        "phone",
        "website",
        "company"
      );
    });
  });

  it("GET /users/1 devuelve el usuario correcto", () => {
    cy.request("GET", `${API}/users/1`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.id).to.eq(1);
      expect(res.body.email).to.match(/@/);
    });
  });

  it("POST /users crea un recurso y devuelve 201", () => {
    const payload = { name: "Arlington QA", username: "aqa", email: "aqa@test.io" };
    cy.request("POST", `${API}/users`, payload).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.include(payload);
      expect(res.body).to.have.property("id");
    });
  });

  it("GET /users/9999 devuelve 404", () => {
    cy.request({ method: "GET", url: `${API}/users/9999`, failOnStatusCode: false }).then(
      (res) => {
        expect(res.status).to.eq(404);
      }
    );
  });
});
