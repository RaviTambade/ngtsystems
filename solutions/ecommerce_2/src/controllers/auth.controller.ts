import * as angular from 'angular';
import { AuthService } from '../services/auth.service';

// Define the types for the $scope
interface IUser {
    email: string;
    password: string;
}


/*interface ICustomScope extends angular.IScope {
  vm: AuthController; 
}*/


interface ICustomScope extends angular.IScope {
  vm: any; 
}

export class AuthController {
     static $inject = ['$scope','AuthService'];
     public username: string;
     public password: string;
     public message: string;
    
      constructor(private $scope: ICustomScope, private svc: AuthService) {
          console.log('auth Service:', this.svc);  
          this.username = '';
          this.password = '';
          this.message = '';
          $scope['vm'] = this;
         
      }

      public login(): void {
        if (this.username === 'admin' && this.password === 'password') {
            this.message = 'Login Successful';
        } else {
            this.message = 'Invalid credentials';
        }
    }
    
  }
  