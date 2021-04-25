describe('Counter E2E tests', () => {
  it('should render correct', () => {
    cy.visit('http://localhost:3000');
    cy.get('.counter').contains('0');
    cy.get('button').contains('+');
    cy.get('button').contains('-');
    cy.get('button').contains('Reset');
    cy.get('button').contains('Change');
    cy.get('input#user-value').should('have.attr', 'placeholder', 0);
  });

  it('should button increase counter', () => {
    const randomNumber = Math.floor((Math.random() * 10) + 1);

    for (let i = 0; i < randomNumber; i++) {
      cy.get('button').contains('+').click();
    }

    cy.get('.counter').contains(randomNumber);
  });

  it('should button decrease counter', () => {
    const randomNumber = Math.floor((Math.random() * 10) + 1);

    cy.get('.counter')
      .invoke('text')
      .then((currentValue) => {
        for (let i = 0; i < randomNumber; i++) {
          cy.get('button').contains('-').click();
        }

        cy.get('.counter').contains(currentValue - randomNumber);
      })
  });

  it('should button reset counter', () => {
    const randomNumber = Math.floor((Math.random() * 10) + 1);

    cy.get('.counter')
      .invoke('text')
      .then((currentValue) => {
        for (let i = 0; i < randomNumber; i++) {
          cy.get('button').contains('+').click();
        }

        cy.get('button').contains('Reset').click();
        cy.get('.counter').contains(0);
      })
  });

  it('should user change counter', () => {
    const randomNumber = Math.floor((Math.random() * 10) + 1);

    cy.get('.counter')
      .invoke('text')
      .then((currentValue) => {
        cy.get('input#user-value').type(`${randomNumber}`);
        cy.get('button').contains('Change').click();
        cy.get('.counter').contains(randomNumber);
        cy.get('button').contains('+').click();
        cy.get('.counter').contains(randomNumber + 1);
      })
  });
})