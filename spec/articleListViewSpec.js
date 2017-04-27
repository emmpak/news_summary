(function(){
  var articleList = new ArticleList();
  articleList.saveArticles(response());
  var articleListView = new ArticleListView(articleList);
  var html = "<h1><ul><li><div><a href=#articles/0>General election 2017: Tony Blair refuses to endorse Jeremy Corbyn for prime minister – politics live</a></div></li>"
  assert.doesInclude(articleListView.getFormattedTitles(),html)

})();
