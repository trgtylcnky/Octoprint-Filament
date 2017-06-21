$(function() {
    function FilamentViewModel() {
        var self = this;
        
		self.value = ko.observable();
		self.value("hahaha");
		
		self.onDataUpdaterPluginMessage = function(plugin, data) {
			if (plugin == "filament"){
				new PNotify({
					title: 'Filament Sensor message:',
					text: data.message,
					hide: false
				});
			}
		};
		
    }

    // we don't explicitely declare a name property here
    // our view model will be registered under "myCustomViewModel" (implicit
    // name derived from contructor name) and "yourCustomViewModel" (explicitely
    // provided as additional name)
    OCTOPRINT_VIEWMODELS.push({
        construct: FilamentViewModel
    });
})
