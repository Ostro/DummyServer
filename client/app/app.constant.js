(function(angular, undefined) {
'use strict';

angular.module('dummyServerApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);