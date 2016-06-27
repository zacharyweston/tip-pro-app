angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {

})

.controller('tipConfirmationCtrl', function($scope) {

})

.controller('createAnAccountCtrl', function($scope) {

})

.controller('loginCtrl', function(store, $scope, $location, auth) {
  $scope.login = function() {
    auth.signin({
      authParams: {
        scope: 'openid offline_access',
        device: 'Mobile device'
      }
    }, function(profile, token, accessToken, state, refreshToken) {
      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      store.set('refreshToken', refreshToken);
      $location.path('/');
    }, function() {
      // Error callback
    });
  }
})

.controller('helpCtrl', function($scope) {

})

.controller('accountCtrl', function($scope) {

})
