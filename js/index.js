

window.onload = function () {

	var $ = require('jquery');

	// change sections. ex. list of books to stadsarkivet
	var changeSection = require('./changesection.js');

	// controls active list items, calls changefloor, controls pulse, 
	var prepareList = require('./preparelist.js');
	var changefloor = require('./changefloor.js');
	var refresh = require('./refresh.js');


	changeSection();
	prepareList();
};