// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Youtube
pageMod.PageMod({
	include: "*.youtube.com",
	contentScriptWhen: "start",
	contentStyle: '#watch7-sidebar-contents #feed, #feed-main-what_to_watch { visibility: hidden; }'
});

// Wikipedia
pageMod.PageMod({
	include: "*.wikipedia.org",
	contentScriptWhen: "start",
	contentStyle: '#mp-upper > tbody > tr > td:not(:last-child), #mp-right > tbody > tr:nth-child(3), #mp-right > tbody > tr:nth-child(4), #mp-lower #n-currentevents, #n-randompage, #mp-middle, #mp-lower, #mp-other, #mp-sister, #mp-lang { display: none; }'
});

// Stackexchange
pageMod.PageMod({
	include: ["*.stackexchange.com", "*.stackoverflow.com", "*.askubuntu.com", "*.serverfault.com", "*.mathoverflow.com", "*.superuser.com"],
	contentScriptWhen: "start",
	contentStyle: '#hot-network-questions, .sidebar-related, .community-bulletin { display: none; }'
});

// Facebook
pageMod.PageMod({
	include: "*.facebook.com",
	contentScriptWhen: "start",
	contentStyle: '#u_jsonp_3_1, #pagelet_ego_contextual_group, #appsNav, #interestsNav, #listsNav { display: none; }'
});

// Quora
pageMod.PageMod({
	include: "*.quora.com",
	contentScriptWhen: "start",
	contentStyle: [
		'.logged_out_related_questions_container, .ContentPageFeed, .grid_page_right_col { display: none; }',
		'.grid_page_center_col { width: 750px; }'
	]
});


