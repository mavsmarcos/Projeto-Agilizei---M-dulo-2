/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

//const faker = require('faker-br');

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        


    
        
        //Acessar a página
        
        cadastro.acessarLogin()
        cadastro.preencherFormulario()
        cadastro.submeterFormulario()
        

        //preencher a página
        // cy.get('input[placeholder=Username]').type(faker.name.firstName() + faker.name.lastName());
        // cy.get(':nth-child(2) > .form-control').type(faker.internet.email());
        // cy.get(':nth-child(3) > .form-control').type('1234567890');

        //submeter o formulário
        // cy.get('.btn').click();
        


    });
});