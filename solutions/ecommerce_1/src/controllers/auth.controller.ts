import * as angular from 'angular';

export class AuthController {
    static $inject = ['$scope'];
  message: string;
  
    constructor() {
      // Controller logic for Home
      this.message = 'Authentication';
    }
  }
  