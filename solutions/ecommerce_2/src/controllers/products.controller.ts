import * as angular from 'angular';
import { CatalogService } from '../services/catalog.service';

interface ICustomScope extends angular.IScope {
  vm: ProductsController; 
}

export class ProductsController {
  static $inject = ['$scope','CatalogService'];
  private products:any[]=[];

  constructor(private $scope: ICustomScope, private svc: CatalogService) {

      console.log('userService:', this.svc);  
      this.loadProducts();
      $scope['vm'] = this;
  }
  loadProducts(): void {
    this.products = this.svc.getProducts();
}

}
//angular.module('myApp').controller('UserController',  UserController);