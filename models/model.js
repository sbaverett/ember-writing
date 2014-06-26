
App.Number = DS.Model.extend({
	path: DS.attr('string'),
  anotherLanguage: DS.attr('string'),
  url: DS.attr('string'),
  linkName: DS.attr('string'),
  routePath: DS.attr('string')
});

App.Number.FIXTURES = [{
      path: 'one.jpeg',
      anotherLanguage: 'Un',
      url: 'http://en.wikipedia.org/wiki/one',
      linkName: 'One',
      routePath: 'numbers.one',
      id: 1
    }, {
      path: 'two.jpeg',
      anotherLanguage: 'deux',
      url: 'http://en.wikipedia.org/wiki/two',
      linkName: 'Two',
      routePath: 'numbers.two',
      id: 2
    }];
