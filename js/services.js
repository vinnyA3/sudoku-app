//require jquery
require('jquery');
var MustacheService = (function($){
	var q = new Promise(function(resolve, reject){
			$.get('./js_templates/box_hovered_template.mst')
				.success(function(data){
					resolve(this.data)
				})
				.error(function(){
					var errMsg = 'Could not load template ...';
					reject(new Error(errMsg));
				});
	});

	
	return{
		getTemplate: _getMustacheTemplate
	}
})(jQuery);
