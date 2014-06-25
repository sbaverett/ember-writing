App.Router.map(function() {
	this.resource('numbers');
  this.route('number', { path: '/numbers/:numbers_id' });
  this.route('edits', { path: '/numbers/:numbers_id/edits' });
});

var numbersArray = [{
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

App.NumbersRoute = Ember.Route.extend({
	model: function() {
		return numbersArray;
	}
});

App.NumberRoute = Ember.Route.extend({
	model: function(params) {
		var numberObject;
		numbersArray.forEach(function(object) {
			if(object.id === +params.numbers_id) {
				numberObject = object;
			}
		});
		return numberObject;
	}
});
App.EditsRoute = Ember.Route.extend({
	model: function(params) {
		var numberObject;
		numbersArray.forEach(function(object) {
			if(object.id === +params.numbers_id) {
				numberObject = object;
			}
		});
		return numberObject;
	}
});
