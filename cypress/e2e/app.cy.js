describe('Esther app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('loads properly', () => {
    cy.visit('http://localhost:3000/')
  })

  it('contains cta text', () => {
    cy.contains('Search')
  })

  it('displays valid city', () => {
    cy.get('.search-bar').type('Barcelona')
    cy.get('.button').click()
    cy.contains('Barcelona')
  })
})
