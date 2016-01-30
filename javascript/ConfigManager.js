var ConfigManager = function(greeter) {
	this.greeter	= greeter;

	if (typeof Config == 'undefined')
		return;
	if (Config.background) {
		$('body').css('background', "url('" + Config.background + "') no-repeat black").css('background-size', 'cover');
	}
};