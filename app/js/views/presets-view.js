// Preset menu

var app = app || {};

(function(global){

	var view = {

		init: function(option){
			this.template = app.templates.presets;
			this.name = 'presetsMenu';
			this.placeholder = document.getElementById('presets-wrapper');

			render();
		}

		render: function(){
			this.plaseholder.innerHTML = this.template;

		}
	}
	
})(window)