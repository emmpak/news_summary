(function() {

  Article.prototype.getSummary = function() { this.summary = "I am a summary"};
  var articleList = new ArticleList();


  (function() {
      assert.arraysEqual(articleList.getArticles(),[]);
  })();

  (function() {
    articleList.saveArticles(response());
    assert.isTrue(articleList.articles.length === 10);
  })();

  (function() {
    articleList.saveArticles(response());
    assert.isEqual(articleList.articles[0].title, "General election 2017: Tony Blair refuses to endorse Jeremy Corbyn for prime minister – politics live")
  })();

  (function() {
    articleList.saveArticles(response());
    assert.doesInclude(articleList.articles[0].summary, "I am a summary");
  })();
})();
