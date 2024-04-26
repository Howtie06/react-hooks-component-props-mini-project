//crete a main element
//within the main element,an array article components each component for a post passed doown as prps to the ArticleLIst
//each attribute should have a unique key


import Article from './Article'

function ArticleList({ posts }) {
  const articles = posts?.map((post, index) => (
    <Article key={index} {...post} />
  ));

  return (
    <main>
      {articles}
    </main>
  );
}

export default ArticleList;