(function(exports){

  function ArticleController(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-elements=image&show-fields=body", false);
    xhr.send();
    this.data = JSON.parse(xhr.responseText);
  }

  ArticleController.prototype = {
    getAllArticles: function() {
      return this.data;
    }
  }

  exports.ArticleController = ArticleController;

})(this);
