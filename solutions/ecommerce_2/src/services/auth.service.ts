import * as angular from 'angular';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

 export class AuthService {
    static $inject = [];
    
    constructor() {
      console.log('AuthService constructor');
    }
    // Simple method to return a list of users
    public validate(user:any):any  {
      console.log("validate is called from service");
      if(user.email==="ravi.tambade@transflower.in" &&
         user.password==="seed")
         {
          return true;
         }
         else{
          return false;
        }
    }
  }
  
//angular.module('myApp').service('UserService', UserService); 