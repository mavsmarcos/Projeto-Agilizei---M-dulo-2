class Routes {


        // Mapear Rotas
        
        // POST 422 https://conduit.productionready.io/api/articles
        // GET https://api.realworld.io/api/tags
    init() {

        
        cy.intercept('POST', '**/api/articles').as('POSTArticles');
        cy.intercept('GET', '**/api/articles/Marcos-Title**').as('GETArticles');
        

    }
}

export default new Routes();