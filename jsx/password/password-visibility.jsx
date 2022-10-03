const React = require("react");

module.exports = function PasswordVisibility(props) {
  return (
    <label className="form-control">
      <input className=""
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />  Show password</label>
  )
}