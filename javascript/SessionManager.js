var SessionManager = function(greeter) {
	this.greeter	= greeter;
	this.session	= null;
	this.default	= null;

	if (lightdm.default_session != "") {
		this.session = lightdm.default_session;
		this.default = lightdm.default_session;
	}
	else
		this.default = lightdm.sessions[0].key;
};
SessionManager.prototype.setSession = function(session) {
	$('.session').removeAttr('checked');
	if (session != null)
		this.greeter.sessionManager.session = session;
	else
		this.greeter.sessionManager.session = this.default;
	$('#' + session).attr('checked', 'checked');
	console.log(session);
};