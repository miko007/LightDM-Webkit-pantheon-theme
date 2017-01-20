var PantheonUser = function (greeter, lightdmuser) {
	this.greeter		= greeter;
	this.defaultAvatar	= "./avatar.svg";
	this.user			= lightdmuser;
	this.user.string	= this.user.real_name != '' ? this.user.real_name : this.user.name;
	this.avatar			= this.user.image != '' ? this.user.image : this.defaultAvatar;
	this.user.id		= this.greeter.userController.list.length;

	this.greeter.gui.addToList(this.user);
	this.setImage();
	this.greeter.userController.list.push(this.user);
};
PantheonUser.prototype.setImage = function() {
	var img = document.getElementById('image_' + this.user.name);
	img.src = this.avatar;
	var $this = this;
	img.onerror = function(elm) {
		elm.currentTarget.src = $this.defaultAvatar;
	};
};