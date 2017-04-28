(function(){
  var articleList = new ArticleList();
  articleList.saveArticles(response());
  var articleListView = new ArticleListView(articleList);
  var html = "<h1><ul><li><div><a href=#articles/0>General election 2017: Tony Blair refuses to endorse Jeremy Corbyn for prime minister – politics live</a></div></li>"
  assert.doesInclude(articleListView.getFormattedTitles(),html)
})();

(function() {
  var articleList = new ArticleList();
  articleList.saveArticles(response());
  var articleListView = new ArticleListView(articleList);
  var htmlIMG = "<img src='https://media.guim.co.uk/3835d894995a5f73f1c26d38cb28301374529f4f/32_0_927_556/500.jpg'";

  assert.doesInclude(articleListView.getFormattedTitles(), htmlIMG)
})();
