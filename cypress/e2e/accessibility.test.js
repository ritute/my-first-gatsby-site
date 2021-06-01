/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Navigates to about page and checks for accessibility violations", () => {
    cy.get('a[href*="/about"]')
      .click()
      .checkA11y()
  })

  it("Navigates to blog page and checks for accessibility violations", () => {
    cy.get('a[href*="/blog"]')
      .click()
      .checkA11y()
  })

  it("Navigates to blog page and checks for blog posts", () => {
    cy.get('a[href*="/blog"]')
      .click()
      .get('article')
      .should('have.length', 3)
  })

  it("Navigates to first blog post and checks for accessibility violations", () => {
    cy.get('a[href*="/blog"]')
      .click()
      .get('article a:first')
      .click()
      .checkA11y()
  })
})