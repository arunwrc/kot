angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.orderMaster', {
    url: '/Order/:tableid',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orderMaster.html',
        controller: 'orderMasterCtrl'
      }
    }
  })

  .state('menu.specials', {
    url: '/specials',
    views: {
      'side-menu21': {
        templateUrl: 'templates/specials.html',
        controller: 'specialsCtrl'
      }
    }
  })

  .state('menu.categories', {
    url: '/categories',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categories.html',
        controller: 'categoriesCtrl'
      }
    }
  })

  .state('menu.unbilledTables', {
    url: '/unbilled',
    views: {
      'side-menu21': {
        templateUrl: 'templates/unbilledTables.html',
        controller: 'unbilledTablesCtrl'
      }
    }
  })

  .state('menu.orders', {
    url: '/order',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orders.html',
        controller: 'ordersCtrl'
      }
    }
  })

  .state('menu.categoryItem', {
    url: '/item',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categoryItem.html',
        controller: 'categoryItemCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});