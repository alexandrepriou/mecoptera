/**
 * 
 */

var mecoptera = {
	oTranslate :  new translate(),
	init : function () {
	},
	
	getElment: function (name) {
		var url ="";
		return mecoptera.ajaxJson(url);
	},
	
	ajaxJson : function(url) {
		var result; 
		$.ajax({
			url : url,
			method : 'post',
			async : false,
			cache : false,
			dataType : 'json',
			success :function (data){
				result = data;
			}, 
			error: function (data) {
				result = data;
			} 
			
		});
		return result;
	}
};