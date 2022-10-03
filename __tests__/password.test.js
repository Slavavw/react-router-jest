describe("Password", () => {
  const React = require("react");
  const TestUtils = require('react-dom/test-utils');
  const findDOM = require("react-dom").findDOMNode;
  const Password = require("../jsx/password/password.jsx");
  it("Проверка изменения (перечеркивание) пункта нижний регистр после нажатия кнопки генерация пароля", done => {
    //Создает компонент React благодаря поддержке JSX из пакета babel-jest 
    let password = TestUtils.renderIntoDocument(<Password
      upperCase={true}
      lowerCase={true}
      special={true}
      number={true}
      over6={true}
    />);
    console.log("check password");
    //получаем элементы li из компонента Password который мы отрендили в тесте утилите, т.е. в тестовом DOM
    let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, "li");
    expect(rules.length).toBe(5); //проверили что должно выполняться 5 правил безопасности пароля
    console.log("ul consists of: ", rules.length, " <li>");
    expect(findDOM(rules[0]).textContent).toEqual("Должен содержать хотя бы один заглавный символ");
    console.log(findDOM(rules[0]).textContent);
    expect(findDOM(rules[2]).textContent).toEqual("Должен содержать один из символов (#$@!&%...)");
    console.log(findDOM(rules[2]).textContent);
    expect(findDOM(rules[3]).textContent).toEqual("Должно быть хотя бы одно число");
    console.log(findDOM(rules[3]).textContent);

    //получаем кнопку генерации пароля
    let generateButton = TestUtils.findRenderedDOMComponentWithClass(password, "generate-btn");
    /*Проверяет, выполняется ли второй критерий — то есть что первый
    дочерний элемент содержит обычный текст, а не <del>*/
    expect(rules[1].firstChild.nodeName.toLowerCase()).toBe("#text");
    TestUtils.Simulate.click(generateButton)
    expect(rules[1].firstChild.nodeName.toLowerCase()).toBe("del");//проверка после щелчка мыши текст второго li должен перечеркнуться, при выполнении условия
    done();
  })
})