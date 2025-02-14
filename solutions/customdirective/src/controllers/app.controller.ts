import * as angular from 'angular';

interface ICustomScope extends angular.IScope {
  vm: any; 
}

export class MyController {
  static $inject = ['$scope'];
  public message: string;

  constructor() {
    this.message = 'Hello from the directive controller!';
  }

  public changeMessage(): void {
    this.message = 'Message changed!';
  }
}


//angular.module('myApp').controller('MyController', MyController);


 