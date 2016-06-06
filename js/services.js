//require jquery
require('jquery');
var MustacheService = (function($){

	function _getMustacheTemplate(){
		return $.get('./js_templates/box_hovered_template.mst')
			.then(function(data){
				return data;
			});
	}

	return{
		getTemplate: _getMustacheTemplate
	}
})(jQuery);
