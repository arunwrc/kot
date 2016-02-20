// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('categories', {
      url: 'templates/categories',
      templateUrl: 'templates/categories.html',
      abstract: false
    })
    
  
  //$urlRouterProvider.otherwise('/tabs/customer');

})

.directive('tabState', function($state) {

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(function() {
          return $state.current.name;
        }, function(stateName) {
           if(stateName === attrs.uiSref) {
             element.addClass('active')
           }
          else {
            element.removeClass('active')
          }
        });
      }
    };
  })