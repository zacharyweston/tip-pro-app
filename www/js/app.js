// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('app', ['ionic','ionic.service.core', 'app.controllers',
  'app.routes',
  'app.services',
  'app.directives',
  'auth0',
  'angular-storage',
  'angular-jwt'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, authProvider, $httpProvider,
  jwtInterceptorProvider) {

  $stateProvider
  // This is the state where you'll show the login
  .state('login', { // Notice: this state name matches the loginState property value to set in authProvider.init({...}) below...
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl',
  })
  // Your app states
  .state('userInfo', {
    url: '/userInfo',
    templateUrl: 'templates/user-info.html',
    controller: 'UserInfoCtrl',
    data: {
      // This tells Auth0 that this state requires the user to be logged in.
      // If the user isn't logged in and he tries to access this state
      // he'll be redirected to the login page
      requiresLogin: true
    }
  })
  authProvider.init({
    domain: 'tippro.auth0.com',
    clientID: 'sAYgBnmp6fvnJjNXBfhaxVxIrzuPiR0v',
    loginState: 'login' // This is the name of the state where you'll show the login, which is defined above...
  });

})
.run(function(auth) {
  // This hooks all auth events to check everything as soon as the app starts
  auth.hookEvents();
});
