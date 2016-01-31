var SessionManager = function(greeter) {
	this.greeter	= greeter;
	this.session	= null;
	this.default	= null;

	if (lightdm.default_session != null) {
		this.session = lightdm.default_session.key;
		this.default = lightdm.default_session.key;
	}
	else
		this.default = lightdm.sessions[0].key;

};
SessionManager.prototype.setSession = function(session) {
	this.session	= session !== null ? session : this.default;
	$('#' + this.session).attr('checked', 'checked');
};