(function(exports){
  function ArticleListView(articleList) {
    this.articleList = articleList;
  };

  ArticleListView.prototype = {
    getFormattedTitles: function() {
      var titles = [];
      for(var i = 0; i < this.articleList.articles.length; i++) {
        var bodyIMG = "<img src='" + this.articleList.articles[i].getImage() + "' width='500' height='300'>";
        var summary = "<div id='article-summary-" + i + "'></div>"
        titles.push("<li><div><a href=#articles/" + i + "><h1>" + this.articleList.articles[i].title + "</h1></a>" + summary + "</div></li>" + bodyIMG);
      };
      return "<ul>" + titles.join("") + "</ul>";
    }
  }
  exports.ArticleListView = ArticleListView;
})(this);
