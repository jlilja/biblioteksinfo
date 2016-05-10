var $ = require('jquery');

module.exports = function() {
	'use strict';
	// run if click event involves #expand with a list item which has ul or span element children
	$('#expand').find('li:has(ul, span)').click( function(event) {

	  // get class of clicked elements parent
	  var isTop = $(this).parent().attr('class');

	  // if clicked parent is top element. Hide all other top elements
	  if (isTop == 'expand') {
	    if ($(this).children('ul').attr('style') !== 'display: block;') {
	      $('#expand').find('li>ul').hide('medium');
	    }
	  }

	  $(this).children('ul').toggle('medium');

	  $('.active').removeClass('active');

	  var idExist = $(this).find('span').attr('id');

	  // this right here does the magic. It finds the position on the map
	  if (idExist !== undefined) {
	    $(this).addClass('active');

	    var requestedFloor = $(this).find('span').attr('class');
	    changeFloor(requestedFloor);

	    var allMightyThings = $(".libraryPosition>div").toArray()
	    for (x in allMightyThings) {
	      $(allMightyThings[x]).removeClass('addPulse');
	    }

	    var somethingRandom = '.' + $(this).find('span').attr('id') + '-pos';
	    $(somethingRandom).addClass('active addPulse');
	    //$('.responsiveImg>img').addClass('blur');
	  }
	  else {
	    $('.responsiveImg>img').removeClass('blur');
	    var allMightyThings = $(".libraryPosition>div").toArray()
	    for (x in allMightyThings) {
	      $(allMightyThings[x]).removeClass('addPulse');
	    }
	  }

	});

	// what the fuck does this do?
	$('#expand').find('li:not(ul, span)').click( function(event) {
	    return false;
	  }).children('ul').hide();
}