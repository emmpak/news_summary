(function(exports) {
  function Article(title,body, url) {
    this.title = title;
    this.body = body;
    this.url = url;
    this.summary;
  }

  Article.prototype = {
    getSummary: function() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + this.url, false);
      xhr.send();
      this.summary =  JSON.parse(xhr.responseText).text;
    }
  }

  exports.Article = Article;
})(this);
