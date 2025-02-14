import * as angular from 'angular';

export class ProductsController {
    static $inject = ['$scope'];
    message: string;
  
    constructor() {
      // Controller logic for About
      this.message = 'Products List';
    }
  }
  