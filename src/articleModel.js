(function(exports) {
  function Article(title,body, url) {
    this.title = title;
    this.body = body;
    this.url = url;
    this.summary;
  }

  Article.prototype = {
    getSummary: function() {
      // var xhr = new XMLHttpRequest();
      // xhr.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + this.url, false);
      // xhr.send();
      // this.summary =  JSON.parse(xhr.responseText).sentences.join(" ");
      this.summary = "THIS IS A SUMMARY"
    },
    getImage: function() {
      div = document.createElement('div');
      div.innerHTML = this.body;
      if (div.innerHTML.includes("<img")) {
        imageURL = div.getElementsByTagName('img')[0].src;
      } else {
        imageURL = 'http://www.pressgazette.co.uk/wp-content/uploads/2016/06/The-Guardian-Reuters.jpg';
      }
      return this.image = imageURL;
    }
  }

  exports.Article = Article;
})(this);
