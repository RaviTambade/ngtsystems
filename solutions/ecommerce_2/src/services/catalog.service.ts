import * as angular from 'angular';

interface Product {
  id: number;
  title: string;
  description: string;
  unitprice: number;
  quantity:number;
}

 export class CatalogService {
    static $inject = [];
    
    constructor() {
      console.log('CatalogService constructor');
    }
    // Simple method to return a list of users
    public getProducts(): any {
      return [
        { id: 1, title: 'gerbera',description:'wedding flower', unitprice:12,quantity:5000 },
        { id: 2, title: 'rose',description:'valentine flower', unitprice:20,quantity:10000 },
        { id: 3, title: 'lotus',description:'worship flower', unitprice:30,quantity:500 }
     
      ];
    }
  }
  
