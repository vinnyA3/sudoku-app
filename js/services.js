//require jquery
var jQuery = require('jquery'),
		Mustache = require('mustache');

var MustacheService = (function($, Mustache){

	function getMustacheTemplate(){
		var q = $.Deferred();
		$.get('js/js_templates/box_hovered_template.htm')
			.success(function(template){
					var view = {name: 'Vinny'},
							getHtml = $(template).html(),
							html = Mustache.render(getHtml, view);
							q.resolve(html);
			})
			.error(function(){
				var message = 'Could not load template...',
						err = new Error(message);
				q.reject(err);
			});
		return q;
	}
	return{
		getTemplate: getMustacheTemplate
	}
})(jQuery, Mustache);

module.exports = MustacheService;
