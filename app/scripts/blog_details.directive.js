require("../app")

angular.module("AwesomeBlog")
	.directive("bl", function () {
	return {
		scope: {
			player: "=player", // functionally the same as ng-model
		},
		templateUrl: "views/player/player_details_directive.html",
	};
});
// in the .html
//dl
//<dt> position</dt>
//<dd>{{ foobar.position }} </dd>
//<dt> Jersey Number</dt>
//<dd>
