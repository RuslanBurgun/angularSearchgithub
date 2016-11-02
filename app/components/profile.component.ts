import { Component, OnInit } from '@angular/core';


import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`,
})
export class ProfileComponent implements OnInit { 
    
     user:any;
     repos:any[];
     username:string;
     defaultUser:string = 'RuslanBurgun';

   
    constructor(private _githubServcie: GithubService){

    }

    ngOnInit() : void {
        this.username = this.username ? this.username : this.defaultUser;
        this.searchUsers();
    }

    searchUsers(){
        this.getCustomers();
        this.getUser();
        this.getRepos();
    }


    getUser() : void{
        this._githubServcie.getUser().subscribe(user=> {
        this.user = user;   
        });
    }

    getRepos() : void{
        this._githubServcie.getRepos().subscribe(repos=> {
        this.repos = repos;  
        });
    }

    getCustomers() : void{
         this._githubServcie.updateCustomer(this.username || this.defaultUser)
    }
        
}