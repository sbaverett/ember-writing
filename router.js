App.Router.map(function() {
	this.resource('numbers', function() {
		this.route('one');
  	this.route('two');
	});
});

App.NumbersRoute = Ember.Route.extend({
	model: function() {
		return [{
			path: 'one.jpeg',
      french: 'Un',
      url: 'en.wikipedia.org/wiki/one',
      linkName: 'One',
      routePath: 'numbers.one'
		}, {
      path: 'two.jpeg',
      french: 'deux',
      url: 'en.wikipedia.org/wiki/two',
      linkName: 'Two',
      routePath: 'numbers.two'
    }];
	}
});
