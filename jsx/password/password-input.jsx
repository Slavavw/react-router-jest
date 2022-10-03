const React = require("react");

module.exports = function PasswordInput(props) {
  return (
    <input className="form-control"
      type={props.visible ? "text" : "password"}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  )
}