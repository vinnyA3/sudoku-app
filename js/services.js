//require jquery
var jQuery = require('jquery'),
		Mustache = require('mustache');

var MustacheService = (function($, Mustache){

	var _cache = {};

	function getMustacheTemplate(callback){
		//if have the response cached, return that
		if(!_cache['template']){
			_cache['template'] = $.get('partials/box_hovered_template.htm')
				.promise();
		}
		return _cache['template'];
	}// ./getMustacheTemplate

	return{
		getTemplate: getMustacheTemplate
	}

})(jQuery, Mustache);

module.exports = MustacheService;
