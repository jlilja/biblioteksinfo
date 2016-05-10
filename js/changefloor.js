var $ = require('jquery');

module.exports = function(reqF) {

	// change floors
	'use strict'
	for (x in maps = $('.responsiveImg>img').toArray()) {
	  maps[x].style.visibility = 'hidden'
	  
	  var result = maps[x]

	  preparedReq = document.getElementById(reqF)
	  try {
	    // change floor success
	    $(preparedReq).css('visibility', 'visible')
	  } catch(e) {
	    console.log(e);
	  }

	}
	var allOfTheDivs = $('.libraryPosition>div').toArray()
	var allOfTheDivsRequested = $('.libraryPosition>.'+reqF).toArray()

	for (x in allOfTheDivs) {
	  allOfTheDivs[x].style.visibility = 'hidden'
	}
	for (y in allOfTheDivsRequested) {
	  allOfTheDivsRequested[y].style.visibility = 'visible'
	  console.log(allOfTheDivsRequested)
	}
};
