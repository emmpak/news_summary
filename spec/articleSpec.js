
  (function() {
    var article = new Article(response().response.results[0].webTitle,
                              response().response.results[0].fields.body,
                              response().response.results[0].webUrl);
    assert.isEqual(article.title, "General election 2017: Tony Blair refuses to endorse Jeremy Corbyn for prime minister – politics live");
    assert.doesInclude(article.body, "The Liberal Democrat leader Tim Farron has said his party will offer young");
    // this tests stubs the summary with the URL of the article
    assert.isEqual(article.summary, "https://www.theguardian.com/politics/live/2017/apr/27/general-election-2017-zac-goldsmith-boris-johnson-brighton-tactical-politics-live")
  })();
