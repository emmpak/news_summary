
  (function() {
    var article = new Article(response().response.results[0].webTitle,
                              response().response.results[0].fields.body);
    assert.isEqual(article.title, "General election 2017: Tony Blair refuses to endorse Jeremy Corbyn for prime minister – politics live");
    assert.doesInclude(article.body, "The Liberal Democrat leader Tim Farron has said his party will offer young");
  })();


//
// window.response().response.results[0].webTitle
//
// window.response().response.results[0].fields.body
