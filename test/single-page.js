"use strict";

var phantomjs = require("../");
phantomjs.listen(function(phantom) {
	this.createPage(function(error, page) {
		console.log("createpage called");
		page.open("http://google.com", function() {
			setTimeout(function() {
				page.render("abc.png");
				page.evaluate(function() {
					return document.title;
				}, [ 1, 2, 3 ], function(val) {
					console.log("done eval", val);
					phantom.exit();
				});
			}, 1000);
		});
	});
});
