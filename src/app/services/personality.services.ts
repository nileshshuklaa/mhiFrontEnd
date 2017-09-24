import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Http } from '@angular/http';

@Injectable()
export class PersonalityServices{
    constructor(private httpClient: Http){}

    addPersonality(data){
        console.log("****************** " + JSON.stringify(data));
        return this.httpClient.post('https://mhiv1-1d765.firebaseio.com/personalities.json', data);
    }

    
}