import { Component, OnInit } from '@angular/core';


import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`,
})
export class ProfileComponent implements OnInit { 
    
     user:any[];
     repos:any[];

   
    constructor(private _githubServcie: GithubService){

     }

    ngOnInit() : void {
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

         
         
   
}