import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username : string;
    private client_id = '440b4a9043f3237aa686';
    private client_secret = 'bc3a4ba5d9f3290ee208c7e6d663459106cf4ca0';
    
    constructor(private _http: Http){
        console.log('githubservice ready');
        this.username = 'RuslanBurgun';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res=>res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res=>res.json());
    }

}

