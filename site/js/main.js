/*****************************************
	Config file
******************************************/

//Configuration des alias 
//http://stackoverflow.com/questions/13605600/requirejs-difference-between-requirejs-and-require-functions
require.config({
	//Force files to be retrieved from the server, not the cache.
	urlArgs: "bust=" +  (new Date()).getTime(),	
	
	waitSeconds: 200,
	paths: {
		jquery:'libs/jquery/1.10.2/jquery',
		underscore:'libs/underscore/1.5.2/underscore',
		backbone:'libs/backbone/1.1.0/backbone',
		handlebars:'libs/handlebars/handlebars-runtime',
		bootstrap:'libs/bootstrap/bootstrap.min',
		jqueryui:'libs/jquery-ui-1.10.4/jquery-ui-1.10.4.custom.min',
		
		//dateFormat
		jquerydf:'libs/jquery-dateFormat/jquery-dateFormat.min',
	}, 	
	shim:{
		'underscore':{
			deps:[],
			exports: '_'				
		},
		
		'backbone':{
			deps:['underscore', 'jquery'],
			exports:'Backbone' 
		},
		
		'handlebars':{
			exports:'Handlebars'
		},

		'bootstrap':{
			deps:['jquery'],
		},
		
		'jquerydf':{
			deps:['jquery'],
		}
	}
});

define(['jquery','underscore','backbone','handlebars','app','jqueryui','bootstrap','jquerydf'], function($,_,Backbone,Handlebars){
	Backbone.$ = $;
	//Alias to JQuery's DOMReady function
	//http://stackoverflow.com/questions/10371539/why-define-anonymous-function-and-pass-it-jquery-as-the-argument
	$(function(){
		require('app').initialize();
		console.log('DOM Ready !!!');
	});
	
});
