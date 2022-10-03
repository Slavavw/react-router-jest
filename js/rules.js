module.exports = {
  upperCase: {
    message: "Должен содержать хотя бы один заглавный символ",
    pattern: /([A-Z])+/
  },
  lowerCase: {
    message: "Должна содержаться хотя бы одна маленькая буква",
    pattern: /([a-z]+)/
  },
  special: {
    message: "Должен содержать один из символов (#$@!&%...)",
    pattern: /([\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]+)/
  },
  number: {
    message: "Должно быть хотя бы одно число",
    pattern: /([0-9]+)/
  },
  over6: {
    message: "пароль должен быть не менее 6 символов",
    pattern: /(.{6,})/
  }
}