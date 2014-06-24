App.Router.map(function() {
	this.resource('numbers', function() {
		this.route('one');
  	this.route('two');
	}); 
});
