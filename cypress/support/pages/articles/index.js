/// <reference types="cypress" />
const faker = require('faker');

const el = require('./elements').ELEMENTS;

import Routes from '../../routes'


class Articles {

    AcessarFormularioDeNovaPublicacao() {
        cy.get(el.buttonSubmit).click()
    }

    PreencherFormulario() {
        // visitar a página do editor e preencher as informações
        cy.get(el.buttonNewArticles).click();
        cy.get(el.inputTitle).type('Marcos Title ' + faker.name.firstName());
        cy.get(el.inputDescription).type('Cypress22');
        cy.get(el.textAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('Cypress Teste01');

    }

    submeterPublicacao() {
        // submeter o artigo

        cy.get(el.buttonSubmit).click()

    }

    verificarSeAPublicacaoFoiCriadaComSucesso() {
        cy.wait('@POSTArticles').then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(307)
        })
      
        cy.wait('@GETArticles').then((getArticlestagsResponse) => {
            expect(getArticlestagsResponse.response.statusCode).to.eq(307)
        })



    }


}

export default new Articles();