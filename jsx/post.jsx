const React = require("react");
const { Link } = require("react-router");
const styles = require("../css/movie.css");

module.exports = function Post(props) {
  let { src, title, text } = props.route.posts[props.params.id];
  return <div className={styles.movie}
    style={{ backgroundImage: `linear-gradient(90deg, rgb(100, 100, 100) 0%,rgba(100, 100, 100,.8) 20%, rgba(100, 100, 100, 0.624) 100%), url(${src})` }}>
    <div className={styles.cover} style={{ backgroundImage: `url(${src})` }} />
    <div className={styles.description}>
      <div className={styles.title}>{title}</div>
      <p className={styles.year}>Сюжет</p>
      <div className={styles.description + " " + styles.actor}>{text}</div>
    </div>
    <Link
      className={styles.closeButton}
      to="/posts">
      ←
    </Link>
  </div>
}

