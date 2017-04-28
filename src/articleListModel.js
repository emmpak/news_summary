(function(exports) {
  function ArticleList() {
    this.articles = [];
  };

ArticleList.prototype = {
  getArticles: function() { return this.articles },
  getSpecificArticle: function(id) {return this.articles[id]},
  saveArticles: function(input) {
    for( var i = 0; i < input.response.results.length; i ++) {
      this.articles.push(new Article(input.response.results[i].webTitle,
                                     input.response.results[i].fields.body,
                                     input.response.results[i].webUrl))
      this.articles[i].getSummary();
    }
  }
}

exports.ArticleList = ArticleList;
})(this);
