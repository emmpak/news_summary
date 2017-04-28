(function(exports){

  function ArticleController(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body&show-elements=image", false);
    xhr.send();
    this.data = xhr.responseText;
  }

  ArticleController.prototype = {
    getAllArticles: function() {
      return this.data;
    },

    showSummary: function(article, id) {
      var articleSummaryView = new ArticleSummaryView(article);
      document.getElementById("article-summary-" + id).innerHTML = articleSummaryView.showArticleSummary();
    }
  };


  exports.ArticleController = ArticleController;

})(this);
