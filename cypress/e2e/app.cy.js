describe('Esther app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('app loads properly', () => {
    cy.visit('http://localhost:3000/')
  })

  it('searcbar contains cta text', () => {
    cy.contains('Search')
  })

  it('app displays valid city', () => {
    cy.get('.search-bar').type('Barcelona')
    cy.get('.button').click()
    cy.contains('Barcelona')
  })

  it('footer github link text works correctly', () => {
    cy.get('a.link').should(
      'have.attr',
      'href',
      'https://github.com/Mangonando',
    )
  })
  it('footer github link icon works correctly', () => {
    cy.get('div.social-media-icons')
      .find('a')
      .eq(0)
      .should(
        'have.attr',
        'href',
        'https://github.com/Mangonando/esther-the-weather-app',
      )
  })

  it('footer linkedin link icon works correctly', () => {
    cy.get('div.social-media-icons')
      .find('a')
      .eq(1)
      .should(
        'have.attr',
        'href',
        'https://www.linkedin.com/in/juan-f-ramirez/',
      )
  })
})
