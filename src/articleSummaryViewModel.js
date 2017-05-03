(function(exports) {

  function ArticleSummaryView(article) {
    this.article = article;
    this.showArticleSummary = function() {
      console.log(this.article)
      var formButton = "<button onclick=getFullArticle(this)>Read More</button>"
      return "<p>" + this.article.summary + "</p>" + formButton;
    };
  };

  exports.ArticleSummaryView = ArticleSummaryView;

})(this);
