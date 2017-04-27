(function(exports) {
  function Article(title,body, url) {
    this.title = title;
    this.body = body;
    this.url = url;
  }

  exports.Article = Article;
})(this);
