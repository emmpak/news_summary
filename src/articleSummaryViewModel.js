(function(exports) {

  function ArticleSummaryView(article) {
    this.article = article;
    this.showArticleSummary = function() {return "<p>" + this.article.summary + "</p>";};
  };

  exports.ArticleSummaryView = ArticleSummaryView;

})(this);
