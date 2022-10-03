const generatePassword = require("../js/generate-password");
const pattern = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]{8,16}$/;
describe("method generate password", () => {
  let password, password2;
  it("проверка пароля нужного шаблона", (done) => {
    password = generatePassword();
    expect(password).toMatch(pattern);
    console.log("пароль1: ", password);
    done();
  })
  it("проверка уникальности генерации паролей", done => {
    password2 = generatePassword();
    expect(password2).not.toEqual(password);
    console.log("пароль2: ", password2);
    done();
  })
})