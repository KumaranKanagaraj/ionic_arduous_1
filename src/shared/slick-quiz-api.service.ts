import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteApi {
    perpage:number = 50;    
    private baseUrl = 'https://jsonplaceholder.typicode.com';
    currentTourney: any = {};

    constructor(private http: Http) { }

    // getTournaments(){
    //     console.log("fetching data ..........");
    //     return new Promise(resolve => {
    //         this.http.get(`${this.baseUrl}/posts`)
    //             .subscribe(res => resolve(res.json()));
    //     });
    // }

        getTournaments(){
        console.log("fetching data ..........");
        return this.http.get(`${this.baseUrl}/posts`)
                .map(res=>res.json())
    }

    // getTournamentData(tourneyId) : Observable<any> {
    //     return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    //         .map((response: Response) => {
    //             this.currentTourney = response.json();
    //             return this.currentTourney;
    //         });
    // }

    // getCurrentTourney(){
    //     return this.currentTourney;
    // }
}