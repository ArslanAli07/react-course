// const names = ["Harry", "Alice"];

// function Post() {
//   const chosenName = Math.random() > 0.5 ? names[0] : names[1];

//   return (
//     <>
//       <h1>Hello {chosenName}</h1>
//       <p>React.js is awesome</p>
//     </>
//   );
// }

// export default Post;

// ----> now instead of random name, we will use props to pass name to Post component

import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post({ id, author, body }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
