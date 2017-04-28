(function(exports){
  function ArticleListView(articleList) {
    this.articleList = articleList;
  };

  ArticleListView.prototype = {
    getImages: function() {
      var images = [];
      for(var i = 0; i < this.articleList.articles.length; i++) {
        images.push("<img src='" + + "'")
      }
    },
    getFormattedTitles: function() {
      var titles = [];
      for(var i = 0; i < this.articleList.articles.length; i++) {
        var bodyIMG = "<img src='" + this.articleList.articles[i].getImage() + "' width='500' height='300'>";
        titles.push("<li><div><a href=#articles/" + i + ">" + this.articleList.articles[i].title + "</a></div></li>" + bodyIMG);
      };
      return "<h1><ul>" + titles.join("") + "</ul><h1>";
    }
  }
  exports.ArticleListView = ArticleListView;
})(this);
