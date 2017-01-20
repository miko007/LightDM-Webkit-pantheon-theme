var PantheonGreeter = function() {
	this.configManager	= new ConfigManager(this);
	this.sessionManager	= new SessionManager(this);
	this.eventlistener	= new EventListener(this);

	var $this = this;
	authentication_complete = function() {
		$this.eventlistener.authenticationComplete();
	};
	show_prompt = function(value) {
		$this.eventlistener.showPrompt(value);
	};

	this.userController		= new UserController(this);
	this.clock				= new Clock(this);
	this.gui				= new GUI(this);
	this.menuController		= new MenuController(this);

	this.clock.update();
	this.userController.generate();
	this.userController.setCurrent(0);
};