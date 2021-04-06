let successfulResponse;

before(() => {
  cy.fixture("openWeatherResponse.json").then(data => {
    successfulResponse = data.successful;
  });

  cy.intercept("GET", /^https:\/\/api\.openweathermap\.org\/data\/2\.5\/weather.{1,}/, request => {
    request.reply(successfulResponse);
  }).as("request");

  cy.visit("/");
});

describe("Marker", () => {
  it("Displays after passing right props", () => {
    cy.get(".leaflet-container").click();
    cy.wait("@request");
    cy.get(".leaflet-marker-pane").find(".leaflet-marker-icon").should("have.length", 1);
  });
});
