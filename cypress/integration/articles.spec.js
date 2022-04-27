/// <reference types="cypress" />
import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {
    //PROCESSO DE LOGIN EM BACKGROUND
    // 1. realizar uma requisição do tipo POST com email e senha
    // 2. capturar o token que é recebido da nossa requisição
    // 3. usar o token recebido para salvar no localstorage



    // hooks -> momentos antes / depois do teste
    // before / beforeEach
    // after / afterEach
    beforeEach(() => {
        Routes.init()
        cy.request({
            method: 'POST',
            url: `${Cypress.config().apiUrl}users/login`,
            body: {
                user: {
                    email: 'tradervanilda@gmail.com',
                    password: '1234567890'
                }
            }
        }).then((loginResponse) => {
            console.log(loginResponse.body)
            cy.log(loginResponse.body.user.token)
            cy.visit('editor', {
                onBeforeLoad: (win) => {
                    win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
                }
            });
        })
    });
    it('Criar uma nova publicação', () => {
        // // visitar a página do editor e preencher as informações  
        // cy.get('[show-authed="true"] > :nth-child(2) > .nav-link').click();
        // cy.get(':nth-child(1) > .form-control').type('Cypress');
        // cy.get(':nth-child(2) > .form-control').type('Cypress');
        // cy.get(':nth-child(3) > .form-control').type('Sempre que se desenvolve uma aplicação, é importante testá-la para garantir uma boa usabilidade, evitando surpresas desagradáveis. A opção mais simples seria testar “na mão”, mas a longo prazo se torna um cenário cansativo e ocorre desperdício de tempo. Para aplicações front-end, é possível utilizar o Framework Cypress para testes automatizados, que nos traz uma economia de tempo a longo prazo. Como diz a própria Oracle, 80% do tempo gasto desenvolvendo uma aplicação é com a manutenção, sendo assim, ter um processo de teste automatizado é extremamente saudável.');
        // cy.get(':nth-child(4) > .form-control').type('Cypress');
        // cy.get('.btn').click();
        articles.PreencherFormulario()
        articles.AcessarFormularioDeNovaPublicacao()
        articles.submeterPublicacao()
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()
    });
});