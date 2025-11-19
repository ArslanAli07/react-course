// import Post from "./components/Post";

// function App() {
//   return (
//     <main>
//       <Post author="Harry" body="Reactjs is great!" />
//       <Post author="Arslan" body="JavaScript is awesome!" />
//       <Post author="Misha" body="I love learning Reactjs!" />
//       <Post author="Charlie" body="Components are reusable!" />
//     </main>
//   );
// }

// export default App;

// import PostsLists from "./components/PostsLists";

// function App() {
//   return (
//     <main>
//       <PostsLists />
//       <PostsLists />
//       <PostsLists />
//     </main>
//   );
// }

// export default App;

import { Outlet } from "react-router-dom";
import PostsLists from "../components/PostsLists";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsLists />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");

  const resData = await response.json();
  return resData.posts;
}
