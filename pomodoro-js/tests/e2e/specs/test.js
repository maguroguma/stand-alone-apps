// https://docs.cypress.io/api/introduction/api.html

// describe("My First Test", () => {
//   it("Visits the app root url", () => {
//     cy.visit("/");
//     cy.contains("h1", "Welcome to Your Vue.js App");
//   });
// });

describe("add, edit, complete, return, remove, then result.", () => {
  it("", () => {
    cy.visit("/");

    // TODOの追加
    cy.get("#add-todo")
      .find("input")
      .type("first todo")
      .should("have.value", "first todo");
    cy.get("#add-todo").find("button").click();
    cy.get("#add-todo").find("input").should("have.value", "");
    cy.get("#todos-area").find("#item-3 > input").should("value", "first todo");
    // TODOの追加
    cy.get("#add-todo")
      .find("input")
      .type("second todo")
      .should("have.value", "second todo");
    cy.get("#add-todo").find("button").click();
    cy.get("#add-todo").find("input").should("have.value", "");
    cy.get("#todos-area")
      .find("#item-4 > input")
      .should("value", "second todo");
    cy.get("#todos-area")
      .find("#item-3 + #item-4 > input")
      .should("value", "second todo");
    // TODOの追加
    cy.get("#add-todo")
      .find("input")
      .type("third todo")
      .should("have.value", "third todo");
    cy.get("#add-todo").find("button").click();
    cy.get("#add-todo").find("input").should("have.value", "");
    cy.get("#todos-area").find("#item-5 > input").should("value", "third todo");
    cy.get("#todos-area")
      .find("#item-4 + #item-5 > input")
      .should("value", "third todo");
    // TODOの追加
    cy.get("#add-todo")
      .find("input")
      .type("fourth todo")
      .should("have.value", "fourth todo");
    cy.get("#add-todo").find("button").click();
    cy.get("#add-todo").find("input").should("have.value", "");
    cy.get("#todos-area")
      .find("#item-6 > input")
      .should("value", "fourth todo");
    cy.get("#todos-area")
      .find("#item-5 + #item-6 > input")
      .should("value", "fourth todo");

    // 2番目に追加したTODOの編集
    cy.get("#todos-area")
      .find("#item-4 > input")
      .clear()
      .type("EDITED: second todo");
    cy.get("#todos-area")
      .find("#item-4 > input")
      .should("value", "EDITED: second todo");

    // 3番目に追加したTODOを完了する
    cy.get("#todos-area").find("#item-5 > #done-5").click();
    cy.get("#todos-area").find("#item-5 > #done-5").should("not.to.exist");
    cy.get("#todos-area").find("#item-5 > #return-5").should("to.exist");
    // 3番目に追加したTODOを戻す
    cy.get("#todos-area").find("#item-5 > #return-5").click();
    cy.get("#todos-area").find("#item-5 > #return-5").should("not.to.exist");
    cy.get("#todos-area").find("#item-5 > #done-5").should("to.exist");

    // 1番目に追加したTODOを消す
    cy.get("#todos-area").find("#item-3 > #remove-3").click();
    cy.get("#todos-area").find("#item-3").should("not.to.exist");
  });
});
