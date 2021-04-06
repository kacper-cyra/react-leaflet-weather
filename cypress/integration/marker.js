let responses = [];

before(() => {
  cy.fixture("openWeatherResponse.json").then(data => {
    responses = [data.rejected, data.successful];
  });

  cy.visit("/");
});

beforeEach(() => {
  cy.intercept("GET", /^https:\/\/api\.openweathermap\.org\/data\/2\.5\/weather.{1,}/, request => {
    request.reply(responses.shift());
  }).as("request");
});

describe("Marker", () => {
  it("Does not display anything if request was unsuccessful", () => {
    cy.get(".leaflet-container").click();
    cy.wait("@request");
    cy.get(".leaflet-marker-pane").find(".leaflet-marker-icon").should("have.length", 0);
  });

  it("Displays after passing right props", () => {
    cy.get(".leaflet-container").click();
    cy.wait("@request");
    cy.get(".leaflet-marker-pane").find(".leaflet-marker-icon").should("have.length", 1);
  });
});
