// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Function to add CSS rules
// http://davidwalsh.name/add-rules-stylesheets
/*
var addcss = (function(css) {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode("")); // WebKit hack
	document.head.appendChild(style);
	style.sheet.insertRule(css);
	return style.sheet;
})();
*/

// Youtube
pageMod.PageMod({
	include: "*.youtube.com",
	contentScriptWhen: "start",
	contentStyle: '#watch7-sidebar-contents { visibility: hidden; }'
});

// Wikipedia
pageMod.PageMod({
	include: "*.wikipedia.org",
	contentScriptWhen: "start",
	contentStyle: '#mp-upper > tbody > tr > td:not(:last-child), #mp-right > tbody > tr:nth-child(3), #mp-right > tbody > tr:nth-child(4), #mp-lower #n-currentevents, #n-randompage, #mp-middle, #mp-lower, #mp-other, #mp-sister, #mp-lang { display: none; }'
});

// Stackexchange
pageMod.PageMod({
	include: "*.stackexchange.com",
	contentScriptWhen: "start",
	contentStyle: '#hot-network-questions, .sidebar-related, .community-bulletin { display: none; }'
});

// Facebook
pageMod.PageMod({
	include: "*.facebook.com",
	contentScriptWhen: "start",
	contentStyle: '#u_jsonp_3_1, #pagelet_ego_contextual_group, #appsNav, #interestsNav, #listsNav { display: none; }'
});

// 


