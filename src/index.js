var controller = new ArticleController();
var articleList = new ArticleList();
// change response() to getAllArticles()
articleList.saveArticles(response());
var articleListView = new ArticleListView(articleList);

(function(){
    document.getElementById('newslist').innerHTML = articleListView.getFormattedTitles();
})(this);
