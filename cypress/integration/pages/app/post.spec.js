/// <reference types="cypress"/>

import CadastrarPostPageObject from '../../../../src/components/screens/app/PostScreen/CadastrarPost.pageObject';

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page and create a new post', () => {
      // Pré Teste
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login').as('userLogin');

      // Cenário
      const postScreen = new CadastrarPostPageObject(cy);
      postScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm();

      // Asserções

      postScreen
        .openModalForm()
        .fillPostForm({ url: 'https://media.moneytimes.com.br/uploads/2020/07/doge-dogecoin.jpg' })
        .testUrlPostForm()
        .nextPagePostForm()
        .filterPostForm()
        .submitPostForm();

      cy.url().should('include', '/app/profile/');

      cy.wait('@userLogin')
        .then((intercet) => {
          const { token } = intercet.response.body.data;
          cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
});
