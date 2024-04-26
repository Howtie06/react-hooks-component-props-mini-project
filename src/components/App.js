import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {

  const posts = blogData.posts;

  return (

    <div className="App">
      <Header/>
      <About/>
      <ArticleList post={posts}/>
    </div>
  );
}

export default App;

