describe("RPS game", () => {
  //Open the URL before each test
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
  // Play the game with the 'Rock' option and check the result
  it("play the game with rock option and check the result", () => {
    //Click the 'Rock' button should exist and is clickable
    cy.get('[data-cy="rock"]').should("exist").click();
    //Check that the user option is set to 'Rock'
    cy.get('[data-cy="user-option"]').should("have.text", "Rock");
    //Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      //If the computer option is set to 'Rock'
      if (option.text().includes("Rock")) {
        //the result is a tie
        cy.get('[data-cy="result"]').contains("It's a tie!");
      }
      //If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        //the result is a computer win
        cy.get('[data-cy="result"]').contains("The computer wins, you lose!");
      }
      //If the computer option is set to 'Scissors'
      else {
        //the result is a user win
        cy.get('[data-cy="result"]').contains("You win!");
      }
    });
  });
  // Play the game with the 'Paper' option and check the result
  it("play the game with paper option and check the result", () => {
    //Click the 'Paper' button should exist
    cy.get('[data-cy="paper"]').should("exist").click();
    //Check that the user option is set to 'Paper'
    cy.get('[data-cy="user-option"]').should("have.text", "Paper");
    //Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      //If the computer option is set to 'Rock'
      if (option.text().includes("Rock")) {
        //the result is user win
        cy.get('[data-cy="result"]').contains("You win!");
      }
      //If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        //the result is a tie
        cy.get('[data-cy="result"]').contains("It's a tie!");
      }
      //If the computer option is set to 'Scissors'
      else {
        //the result is a computer win
        cy.get('[data-cy="result"]').contains("The computer wins, you lose!");
      }
    });
  });
  // Play the game with the 'Scissors' option and check the result
  it("play the game with scissors option and check the result", () => {
    //Click the 'Scissors' button should exist
    cy.get('[data-cy="scissors"]').should("exist").click();
    //Check that the user option is set to 'Scissors'
    cy.get('[data-cy="user-option"]').should("have.text", "Scissors");
    //Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      //If the computer option is set to 'Rock'
      if (option.text().includes("Rock")) {
        //the result is a computer win
        cy.get('[data-cy="result"]').contains("The computer wins, you lose!");
      }
      //If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        //the result is a user win
        cy.get('[data-cy="result"]').contains("You win!");
      }
      //If the computer option is set to 'Scissors'
      else {
        //the result is a tie
        cy.get('[data-cy="result"]').contains("It's a tie!");
      }
    });
  });
});
