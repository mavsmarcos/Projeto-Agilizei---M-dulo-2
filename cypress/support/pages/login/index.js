const el = require('./elements').ELEMENTS

class Login {
    acessarLogin(){
    // Acessar a página de login
    cy.visit('login');
 }
 preencherFormulario(){
     //preencher o formulario
     cy.get(el.inputEmail).type(Cypress.env('email'));
     cy.get(el.inputPassword).type(Cypress.env('password')); 
 }
submeterFormulario(){
    cy.get(el.buttonSubmit).click()
   }
}
export default new Login();
