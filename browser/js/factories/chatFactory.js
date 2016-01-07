app.factory('ChatFactory', function ($on, $emit) {
		var factory = {};
		var socket = io.connect();
		factory.messages = [];
		socket.on('chat message', function(message) {
				$emit('updateArr', message);
		});
		factory.sendMessage = function(message) {
			socket.emit('chat message', message);
		};
		factory.getAllMessages = function() {
			return this.messages;
		}
		return factory;
});
