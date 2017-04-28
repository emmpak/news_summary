(function() {
var articleList = new ArticleList();
articleList.saveArticles = function(input) {
   for( var i = 0; i < input.response.results.length; i ++) {
      var summary = "I am a summary";
      console.log('testing')
      this.articles.push(new Article(input.response.results[i].webTitle,
                                     input.response.results[i].fields.body,
                                     summary))
      }
}



  // (function() {
  //   // var articleList = new ArticleList()
  //     assert.arraysEqual(articleList.getArticles(),[]);
  // })();
  //
  // (function() {
  //   // var articleList = new ArticleList()
  //   articleList.saveArticles(response())
  //   assert.isTrue(articleList.articles.length === 10)
  // })();
  //
  // (function() {
  //   // var articleList = new ArticleList()
  //   articleList.saveArticles(response())
  //   assert.isEqual(articleList.articles[0].title, "General election 2017: Tony Blair refuses to endorse Jeremy Corbyn for prime minister – politics live")
  // })();
  //
  // (function() {
  //   // var articleList = new ArticleList()
  //   articleList.saveArticles(response())
  //   assert.doesInclude(articleList.articles[0].summary, "I am a summary");
  // })();

})();
