var GUI = function(greeter) {
	this.greeter	= greeter;
	this.userspace	= 96 + 3;
	this.margin		= 100;
	this.listTop	= parseInt($('#userList').css('top'), 10);

	$('a').click(function(e) {
		e.preventDefault();
	});
};
GUI.prototype.animateUser = function(id) {
	var next = id + 1 < this.greeter.userController.list.length ? id + 1 : id;
	var last = id - 1 >= 0 ? id - 1 : 0;

	//$('#managerMenu').fadeOut();
	$('.user > p').html("");
	var top = this.listTop - ( (id) * this.userspace) - this.margin;
	$('.user').removeClass('active').removeClass('bright');
	$('#userList').css('margin-top', top);
	$('#' + this.greeter.userController.currentUser.name).addClass('active').addClass('bright');
	$('#' + this.greeter.userController.list[next].name).addClass('bright');
	$('#' + this.greeter.userController.list[last].name).addClass('bright');
	//$('#manager').remove();
	//$('<a id="manager" data-jq-dropdown="#managerMenu"><span class="fa fa-gear"></span></a>').prependTo('#' + this.greeter.userController.currentUser.name);
	this.addLoginField();
};
GUI.prototype.addLoginField = function() {
	$('#' + this.greeter.userController.currentUser.name + ' > p').html(
		'<span class="fa fa-lock" id="lock"></span>' +
		'<input type="password" autocomplete="off" id="password">' +
		'<span class="fa fa-arrow-circle-right" id="loginbutton">' +
		'</span>'
	);
	var $this = this;
	$('#loginbutton').click(function() {
		$this.greeter.eventlistener.login(13);
	});
	var $this = this;
	$('#password').keydown(function(event) {
		$this.greeter.eventlistener.login(event.keyCode);
	}).focus();
};
GUI.prototype.removeLoginField = function() {
	$('#' + this.greeter.userController.currentUser.name + ' > p').html('');
}
GUI.prototype.addToList = function(user) {
	var loggedinBadge = user.logged_in ? '<span class="fa fa-check loggedin"></span>' : '';

	$('<article class="user" id="' + user.name + '">' +
	loggedinBadge +
	'<img id="image_' + user.name + '" src="" />' +
	'<label>' + user.string + '</label>' +
	'<p></p>' +
	'</article>' +
	'<div style="clear: both"></div>').appendTo('#userList');
	var $this = this;
	$('#' + user.name).click(function() {
		$this.greeter.userController.setCurrent(user.id);
	});
};