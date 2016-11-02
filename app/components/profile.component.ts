import { Component, OnInit } from '@angular/core';


import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`,
})
export class ProfileComponent implements OnInit { 
    
     user:any[];

   
    constructor(private _githubServcie: GithubService){

     }

    ngOnInit() : void {
         this.getUser();
    }

    getUser() : void{
        this._githubServcie.getUser().subscribe(user=> {
        this.user = user;   
        });
        console.log(this.user)
    }
         
         
   
}