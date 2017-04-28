var controller = new ArticleController();
var articleList = new ArticleList();
// change response() to controller.getAllArticles()
articleList.saveArticles(response());
var articleListView = new ArticleListView(articleList);

(function(){
    document.getElementById('newslist').innerHTML = articleListView.getFormattedTitles();
})(this);


(function makeURLChangeShowSummaryForCurrentPage() {
  window.addEventListener("hashchange", showSummaryForCurrentPage);
})();

function showSummaryForCurrentPage() {
  controller.showSummary(articleList.getSpecificArticle(getArticleFromURL(window.location)), getArticleFromURL(window.location));
};

function getArticleFromURL(location) {
  return location.hash.split("/")[1];
};

function getFullArticle(button) {
  button.parentNode.innerHTML = articleList.getSpecificArticle(button.parentNode.getAttribute("id").slice(-1)).body;
}
