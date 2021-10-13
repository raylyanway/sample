/// <reference types="cypress" />

describe("images page", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.findByText("Welcome to the test application.").should("be.visible");
  });

  it("should open images page", () => {
    cy.get("nav li").eq(1).click();

    cy.url().should("eq", "http://localhost:3000/images");
  });

  it("should open video page", () => {
    cy.get("nav li").eq(2).click();

    cy.url().should("eq", "http://localhost:3000/video");
  });
});
