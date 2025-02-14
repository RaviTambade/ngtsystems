import * as angular from 'angular';

 export class CartService {
    static $inject = [];
    
    constructor() {
      console.log('CartService constructor');
    }
    // Simple method to return a list of users
    public getCart(): any {
      return [
        { id:3, quantity:12 },
        { id:7, quantity:4 },
        { id:2, quantity:8 }
      ];
    }
  }
