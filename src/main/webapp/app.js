define(['backbone', 'router/workspaceRouter'], function(Backbone, WorkspaceRouter) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	"use strict";

	 $(function(){
		window.tc = {
			routers : {
				workspaceRouter : WorkspaceRouter
			},
			views : {},
			models : {},
			ticker: null
		};
		
		var started = Backbone.history.start({pushState:false, root:'/HTML5BackboneJQMRequireJS/'});
		window.tc.routers.workspaceRouter.navigate("#index", {trigger:true});
	});
});
