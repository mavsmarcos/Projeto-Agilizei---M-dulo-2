const el = require('./elements').ELEMENTS
const faker = require('faker-br');

class cadastro {

    acessarLogin(){

        
        //Acessar a página
        cy.visit('register');
 }

 preencherFormulario(){
     //preencher a página
         cy.get(el.inputName).type(faker.name.firstName() + faker.name.lastName());
         cy.get(el.inputEmail).type(faker.internet.email());
         cy.get(el.inputPassword).type('1234567890');

 }
submeterFormulario(){
     cy.get('button.btn-primary').click();
   }
}
export default new cadastro();