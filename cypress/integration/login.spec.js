/// <reference types="cypress" />

import login from '../support/pages/login'


context('login', () => {
    it('realizar login com sucesso', () => {
        // cy.visit('login');
        //input[ng-model*-email]
        //input[ng-model*-password]
        //button.btn-primary

        // cy.get(':nth-child(2) > .form-control').type(Cypress.env('email'));
        // cy.get(':nth-child(3) > .form-control').type(Cypress.env('password'));
        // cy.get('button.btn-primary').click()
        login.acessarLogin()
        login.preencherFormulario()
        login.submeterFormulario()

    });

   
});