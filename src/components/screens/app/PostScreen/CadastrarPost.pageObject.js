export default class CadastrarPostPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/app/login/');
  }

  fillLoginForm({ user, password }) {
    this.cy.get('#formCadastro input[name="usuario"]').type(user);
    this.cy.get('#formCadastro input[name="senha"]').type(password);

    return this;
  }

  submitLoginForm() {
    this.cy.get('#formCadastro button[type="submit"]').click();
    return this;
  }

  openModalForm() {
    this.cy.get('button.cadastrarFoto').click();
    return this;
  }

  fillPostForm({ url }) {
    this.cy.get('#formCadastrarPost input[name="fotoUrl"]').type(url);
    return this;
  }

  testUrlPostForm() {
    this.cy.get('#validUrl').click();
    return this;
  }

  nextPagePostForm() {
    this.cy.get('#btnAvancar').click();
    return this;
  }

  filterPostForm() {
    this.cy.get('#formCadastrarPost').find('label').contains('1977').click();
    return this;
  }

  submitPostForm() {
    this.cy.get('#formCadastrarPost button[type="submit"]').click();
    return this;
  }
}
