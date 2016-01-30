var ConfigManager = function(greeter) {
	this.greeter	= greeter;

	if (Config.background) {
		$('body').css('background', "url('" + Config.background + "') no-repeat black");
	}
};