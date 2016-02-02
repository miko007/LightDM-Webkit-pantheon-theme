var EventListener = function(greeter) {
	this.greeter	= greeter;

	var $this		= this;
	document.addEventListener("keydown", function(event) {
		if (event.keyCode == 40)
			$this.greeter.userController.setCurrent($this.greeter.userController.currentUser.id + 1);
		else if (event.keyCode == 38)
			$this.greeter.userController.setCurrent($this.greeter.userController.currentUser.id - 1);
	});
	document.addEventListener("mousewheel", function(event) {
		event.preventDefault();
		var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
		if (delta < 0)
			$this.greeter.userController.setCurrent($this.greeter.userController.currentUser.id + 1);
		else if (delta > 0)
			$this.greeter.userController.setCurrent($this.greeter.userController.currentUser.id - 1);
	});

	$(document).ready(function() {
		$('#shutdown').click(function() {
			console.log("STOP");
			lightdm.shutdown();
		});
		$('#restart').click(function() {
			lightdm.restart();
		});
		$('#suspend').click(function() {
			lightdm.suspend();
		});
		$('#highcontrast').click(function() {
			if ($('body').hasClass('highcontrast')) {
				$('body').removeClass('highcontrast');
				$(this).find('input').attr('checked', '');
			}
			else {
				$('body').addClass('highcontrast');
				$(this).find('input').attr('checked', 'checked');
			}
		});
	});
};
EventListener.prototype.login = function(keyCode) {
	if (keyCode != 13)
		return;
	lightdm.provide_secret($('#password').val());
	this.greeter.gui.removeLoginField();
};
EventListener.prototype.authenticationComplete = function() {
	if (lightdm.is_authenticated) {
		lightdm.login(this.greeter.userController.currentUser.name, this.greeter.sessionManager.session);
	}
	else {
		setTimeout(this.greeter.gui.addLoginField.bind(this), 500);
		$('#password').val("").focus();
		$('#' + this.greeter.userController.currentUser.name).effect('shake', {times: 2}, 700);
		lightdm.start_authentication(this.greeter.userController.currentUser.name);
	}
};
EventListener.prototype.showPrompt = function(value, type) {
	setTimeout(this.greeter.gui.addLoginField.bind(this), 500);
};
