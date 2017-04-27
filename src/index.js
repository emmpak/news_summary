var articleList = new ArticleList();
articleList.saveArticles(response());
var articleListView = new ArticleListView(articleList);

(function(){
    document.getElementById('newslist').innerHTML = articleListView.getFormattedTitles();
})(this);
