import Post from "./Post";
import { useLoaderData } from "react-router-dom";

import classes from "./PostsLists.module.css";

function PostsLists() {
  const posts = useLoaderData();

  return (
    <>
      {/* -----> third approach: */}

      {/* {update! now i am using routing} */}

      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )} */}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts found. Maybe add one?</h2>
          <p>Start by clicking New Post!</p>
        </div>
      )}
    </>
  );
}

export default PostsLists;

// ----> another good approach:

// let modalContent;

// if (modalIsVisible) {
//   modalContent = (
//     <Modal onClose={hideModalHandler}>
//       <NewPost
//         onAuthorChange={authorChangeHandler}
//         onBodyChange={bodyChangeHandler}
//       />
//     </Modal>
//   );
// }

{
  /* {modalContent} */
}

//

{
  /* ------> second approach use it in return: */
}

{
  /* {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onAuthorChange={authorChangeHandler}
            onBodyChange={bodyChangeHandler}
          />
        </Modal>
      ) : null} */
}
