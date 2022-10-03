const React = require("react");
module.exports = class PasswordInfo extends React.Component {
  render() {
    return (
      <div>
        <h4>Password strength</h4>
        <ul>
          {this.props.rules.map((processedRule) => {
            if (processedRule.isCompleted) {
              return <li key={processedRule.key}>
                <del>{processedRule.rule.message}</del>
              </li>
            }
            return (
              <li key={processedRule.key}>
                {processedRule.rule.message}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
