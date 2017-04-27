(function(exports) {
  function ArticleList() {
    this.articles = [];
  };

ArticleList.prototype = {
  getArticles: function() { return this.articles },
  saveArticles: function(input) {
    for( var i = 0; i < input.response.results.length; i ++) {
      var summary = getSummary(input.response.results[i].webUrl);
      this.articles.push(new Article(input.response.results[i].webTitle,
                                     input.response.results[i].fields.body,
                                     summary))
    }
  }
}

exports.ArticleList = ArticleList;
})(this);



function getSummary(response) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + response, false);
  xhr.send();
  return JSON.parse(xhr.responseText).text;
}
