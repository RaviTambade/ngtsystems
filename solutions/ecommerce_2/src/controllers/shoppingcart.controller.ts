import * as angular from 'angular';

export class ShoppingcartController {
    static $inject = ['$scope'];
    message: string;
  
    constructor() {
      // Controller logic for Home
      this.message = 'Shopping Cart';
    }
  }
  