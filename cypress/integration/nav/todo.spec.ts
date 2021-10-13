/// <reference types="cypress" />

describe("images page", () => {
  it("should display nav with icons", () => {
    cy.visit("/");

    cy.findByText("Welcome to the test application.").should("be.visible");

    cy.get("nav li svg").each((el, i) => {
      cy.wrap(el).matchImageSnapshot(`icon-${i}`);
    });
  });

  it("should open images page", () => {
    cy.visit("/");

    cy.findByText("Welcome to the test application.").should("be.visible");

    cy.get("nav li").eq(1).click();

    cy.url().should("eq", "http://localhost:3000/images");
  });

  it("should open video page", () => {
    cy.visit("/");

    cy.findByText("Welcome to the test application.").should("be.visible");

    cy.get("nav li").eq(2).click();

    cy.url().should("eq", "http://localhost:3000/video");
  });
});
