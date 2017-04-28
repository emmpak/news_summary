(function(exports) {
  function Article(title,body) {
    this.title = title;
    this.body = body;
  }

  Article.prototype = {
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
