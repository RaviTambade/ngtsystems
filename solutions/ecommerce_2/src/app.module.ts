import * as angular from 'angular';
import 'angular-route';  // Import ngRoute for routing

// Import the controllers
import { HomeController } from './controllers/home.controller';
import { AboutController } from './controllers/about.controller';
import { ContactController } from './controllers/contact.controller';
import { ProductsController } from './controllers/products.controller';
import { ShoppingcartController } from './controllers/shoppingcart.controller';
import { AuthController } from './controllers/auth.controller';
import { CatalogService } from './services/catalog.service';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';

// Define the AngularJS module
const appModule = angular.module('myApp', ['ngRoute']);

// Configure routing with the $routeProvider
appModule.config(['$routeProvider', ($routeProvider:any) => {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',  // Template for the home route
      controller: 'HomeController',  // Controller for the home route
      controllerAs: 'homeCtrl'  // Use 'homeCtrl' as alias for the controller instance
    })
    .when('/about', {
      templateUrl: 'views/about.html',  // Template for the about route
      controller: 'AboutController',  // Controller for the about route
      controllerAs: 'aboutCtrl'  // Use 'aboutCtrl' as alias for the controller instance
    })

    .when('/contact', {
      templateUrl: 'views/contact.html',  // Template for the contact route
      controller: 'ContactController',  // Controller for the Contact route
      controllerAs: 'contactCtrl'  // Use 'contactCtrl' as alias for the controller instance
    })

    .when('/catalog', {
      templateUrl: 'views/list.html',  // Template for the contact route
      controller: 'ProductsController',  // Controller for the Contact route
      controllerAs: 'productsCtrl'  // Use 'contactCtrl' as alias for the controller instance
    })
    .when('/cart', {
      templateUrl: 'views/cart.html',  // Template for the contact route
      controller: 'ShoppingcartController',  // Controller for the Contact route
      controllerAs: 'cartCtrl'  // Use 'contactCtrl' as alias for the controller instance
    })
    .when('/login', {
      templateUrl: 'views/login.html',  // Template for the contact route
      controller: 'AuthController',  // Controller for the Contact route
      controllerAs: 'authCtrl'  // Use 'contactCtrl' as alias for the controller instance
    })

    .otherwise({
      redirectTo: 'home'  // Default route is home
    });
}]);

// Register controllers with the module


appModule.service('CatalogService', CatalogService);
appModule.service('CartService', CartService);
appModule.service('AuthService', AuthService);
 
appModule.controller('HomeController', HomeController);
appModule.controller('AboutController', AboutController);
appModule.controller('ContactController', ContactController);
appModule.controller('ProductsController', ProductsController);
appModule.controller('ShoppingcartController', ShoppingcartController);
appModule.controller('AuthController', AuthController);

export default appModule;
