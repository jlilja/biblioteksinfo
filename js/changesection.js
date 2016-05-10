var $ = require('jquery');

module.exports = function() {
	'use strict';

	$('.sections>li').click(function() {

		var clicked = '.' + this.id;

		if (clicked === '.expList') {
		  var clicked = '#expand';
		}

		// add class .closed to to all elements under .content
		$('.right-col>.content>*').addClass('closed');

		// remove class on clicked element via earlier created variable
		$(clicked).removeClass('closed');

	});
}