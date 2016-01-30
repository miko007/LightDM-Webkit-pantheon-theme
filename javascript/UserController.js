var UserController = function(greeter) {
	this.greeter		= greeter;
	this.list			= [];
	this.currentUser	= null;
};
UserController.prototype.generate = function() {
	$this = this;
	lightdm.users.forEach(function(user) {
		new User($this.greeter, user);
	})
};
UserController.prototype.setCurrent = function (id) {
	if (id > this.list.length - 1 || id < 0)
		return;
	if (this.currentUser === null)
		lightdm.cancel_authentication();
	this.currentUser = this.list[id];
	lightdm.start_authentication(this.currentUser.name);
	this.greeter.gui.animateUser(id);
};