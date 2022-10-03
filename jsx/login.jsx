const React = require("react");
const Password = require("./password/password.jsx");

module.exports = function Login(props) {
  return (
    <Password
      upperCase={true}
      lowerCase={true}
      special={true}
      number={true}
      over6={true}
    />
  )
}