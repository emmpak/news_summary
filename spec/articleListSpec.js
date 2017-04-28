
  (function() {
      var articleList = new ArticleList()
      assert.arraysEqual(articleList.getArticles(),[]);
  })();

  (function() {
    var articleList = new ArticleList()
    Article.prototype.getSummary = function() { this.summary = "I am a summary"};
    articleList.saveArticles(response());
    assert.isTrue(articleList.articles.length === 10);
  })();

  (function() {
    var articleList = new ArticleList()
    Article.prototype.getSummary = function() { this.summary = "I am a summary"};
    articleList.saveArticles(response());
    assert.isEqual(articleList.articles[0].title, "General election 2017: Tony Blair refuses to endorse Jeremy Corbyn for prime minister – politics live")
  })();

  (function() {
    var articleList = new ArticleList()
    Article.prototype.getSummary = function() {  this.summary = "I am a summary"};
    articleList.saveArticles(response());
    assert.doesInclude(articleList.articles[0].summary, "I am a summary");
  })();
