var MenuController = function(greeter) {
	this.greeter	= greeter;

	this.buildPowerMenu();
	this.buildSessionMenu();
	this.buildLangugageMenu();
};
MenuController.prototype.buildPowerMenu = function() {
	if (lightdm.can_suspend) {
		$('<li><a href="#" id="suspend">Energiesparen</a></li>').appendTo('#powerMenu > ul');
	}
	if (lightdm.can_restart) {
		$('<li><a href="#" id="restart">Neustarten</a></li>').appendTo('#powerMenu > ul');
	}
	if (lightdm.can_shutdown) {
		$('<li><a href="#" id="shutdown">Herunterfahren</a></li>').appendTo('#powerMenu > ul');
	}
};
MenuController.prototype.buildSessionMenu = function() {
	lightdm.sessions.forEach(function(manager) {
		$('<li><a href="#">' + manager.name + '</a></li>').appendTo('#managerMenu > ul');
	});
};
MenuController.prototype.buildLangugageMenu = function() {
	lightdm.layouts.forEach(function(language) {
		$('<li><a href="">' + language.description + '</a></li>').appendTo('#languageMenu > ul');
	});
};