App.Router.map(function() {
	this.resource('numbers');
  this.route('number', { path: '/numbers/:numbers_id' });
});

var numbersArray = [{
      path: 'one.jpeg',
      french: 'Un',
      url: 'http://en.wikipedia.org/wiki/one',
      linkName: 'One',
      routePath: 'numbers.one',
      id: 1
    }, {
      path: 'two.jpeg',
      french: 'deux',
      url: 'http://en.wikipedia.org/wiki/two',
      linkName: 'Two',
      routePath: 'numbers.two',
      id: 2
    }];

App.NumbersRoute = Ember.Route.extend({
	model: function() {
		return numbersArray;
	}
});

