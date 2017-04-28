(function(exports) {
  function ArticleList() {
    this.articles = [];
  };

ArticleList.prototype = {
  getArticles: function() { return this.articles },
  saveArticles: function(input) {
    for( var i = 0; i < input.response.results.length; i ++)
      this.articles.push(new Article(input.response.results[i].webTitle,
                                     input.response.results[i].fields.body))
  },
  getSpecificArticle: function(id) {return this.articles[id]}
}

exports.ArticleList = ArticleList;
})(this);
