(function(exports){
  function ArticleListView(articleList) {
    this.articleList = articleList;
  };

  ArticleListView.prototype = {
    getFormattedTitles: function() {
      var titles = [];
      for(var i = 0; i < this.articleList.articles.length; i++) {
        titles.push("<li><div><a href=#articles/" + i + ">" + this.articleList.articles[i].title + "</a></div></li>")
      };
      return "<h1><ul>" + titles.join("") + "</ul><h1>";
    }
  }
  exports.ArticleListView = ArticleListView;
})(this);
