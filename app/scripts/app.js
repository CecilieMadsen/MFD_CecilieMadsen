'use strict';

/* app module */


var app = angular.module('store', [
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Home', {
        templateUrl: 'pages/products.html',
        controller: 'StoreController'
      }).
      when('/basket/:phoneId', {
        templateUrl: 'pages/basket.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/Home'
      });
  }]);



    (function(){
    var app = angular.module('store', []);

    var gem = [{
      id: 1,
    	name: 'NIKE TEAILWIND LOOSE',
    	description: 'RUNNING TANK TOP',
      price: 260.90,
      image: 'images/virtuel.png'
    },
    {
      id: 2,
    	name: 'NIKE G87',
    	description: 'TRAINING TANK TOP',
      price: 120.00,
      image: 'images/virtuel.png'
    },
    {
      id: 3,
    	name: 'NIKE I-BEAM SWOOSH',
    	description: 'SPORTS TOP',
      price: 478.90,
      image: 'images/virtuel.png'
    },
    {
      id: 4,
      name: 'NIKE LUX',
      description: 'RUNNING TOP',
      price: 120.00,
      image: 'images/virtuel.png'
    }];

    app.controller('StoreController', function(){
    	this.products = gem;
    });

    /* contact form */

    app.controller('FormController', function(){
      this.contact = {};

      this.submitForm = function() {
        alert('SUBMITTET yay!')
        this.contact = {};
      };

    });

    })();

    


