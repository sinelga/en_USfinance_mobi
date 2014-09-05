'use strict';

/* Filters */
var filters = angular.module('en_US_finance_angjs_filters', []);

filters.filter('t2tot1', function() {
	  return function(input) {

		    return input.replace('t=2','t=1');
		  };
		  
		  
		  
	});

filters.filter('thumb_w300shadow', function() {
	  return function(input) {

		    return input.replace('thumb','w300shadow');
		  };		  
		  
	});



