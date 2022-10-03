const React = require("react");
const { Link } = require("react-router");

module.exports = function Posts(props) {
  return <div>Posts
    <ol>{props.route.posts.map((post, index) => (
      <li key={index}>
        <Link to={`/posts/${index}`}>{post.title}</Link>
      </li>
    ))}
    </ol>
  </div>
}