
(function(){
  var article = { title: "Testing" }
  var articleList = new ArticleList();
  articleList.articles.push(article);
  var articleListView = new ArticleListView(articleList);
  var html = "<h1><ul><li><div><a href=#articles/0>Testing</a></div></li></ul></h1>"
  assert.isEqual(articleListView.getFormattedTitles(),html)

})();
