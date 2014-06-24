App.Router.map(function() {
	this.resource('numbers', function() {
		this.route('one');
  	this.route('two');
	}); 
});

App.NumbersOneRoute = Ember.Route.extend({
	model: function() {
		return {
			path: 'one.jpeg'
		};
	}
});
