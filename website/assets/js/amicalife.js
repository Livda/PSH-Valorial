$(function () {
    var platform = navigator.platform.toLowerCase();
    if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) {
        if ($.browser.webkit) {
            $.srSmoothscroll();
        }
    }
});

var alix = $("#alix").find(".head");
var lucas = $("#lucas").find(".head");
var nico = $("#nico").find(".head");
var alexis = $("#alexis").find(".head");
var rachel = $("#rachel").find(".head");
var eugenie = $("#eugenie").find(".head");
var jordy = $("#jordy").find(".head");
var mymy = $("#mymy").find(".head");
var olivier = $("#olivier").find(".head");
var josso = $("#josso").find(".head");

alix.hover(
	function() {
		$("#team-name").text("Alix");
		$("#team-role").text("Responsable Partenariats");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

lucas.hover(
	function() {
		$("#team-name").text("Lucas");
		$("#team-role").text("Responsable Matériel - Clubs");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

nico.hover(
	function() {
		$("#team-name").text("Nico");
		$("#team-role").text("Vice Secrétaire & Développeur");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

alexis.hover(
	function() {
		$("#team-name").text("Alexis");
		$("#team-role").text("Responsable Matériel - Événements");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

rachel.hover(
	function() {
		$("#team-name").text("Rachel");
		$("#team-role").text("Responsable Communication");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

eugenie.hover(
	function() {
		$("#team-name").text("Eugénie");
		$("#team-role").text("Secrétaire");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

jordy.hover(
	function() {
		$("#team-name").text("Jordan");
		$("#team-role").text("Vice Trésorier");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

mymy.hover(
	function() {
		$("#team-name").text("Myriam");
		$("#team-role").text("Vice Présidente");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

olivier.hover(
	function() {
		$("#team-name").text("Olivier");
		$("#team-role").text("Trésorier");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

josso.hover(
	function() {
		$("#team-name").text("Louis");
		$("#team-role").text("Président");
	},
	function() {
		$("#team-name").text("");
		$("#team-role").text("");
	}
);

var lactor1 = $("#li_actor_1");
var actor1 = $("#i_actor_1");
lactor1.hover {
	function() {
		actor1.addClass("show");
	}
}
