require("../app")

angular.module('soccr')
.directive('playerDetails', function90 {
  return {
    scope: {
      foobar: '=player',
    },
    templateUrl: "views/player/player_details_directives.html"
  }
})

// in the .html
//dl
//<dt> position</dt>
//<dd>{{ foobar.position }} </dd>
//<dt> Jersey Number</dt>
//<dd>
