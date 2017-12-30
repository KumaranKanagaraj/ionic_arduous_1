import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteApi {
    perpage:number = 50;    
    private baseUrl = 'https://jsonplaceholder.typicode.com';
    private corsUrl = 'https://cors-anywhere.herokuapp.com'
    private kayamaiuRL = 'http://kayamai.thinkbyfun.com/api/example/user'
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

    fetchJson(): any {
        console.log(this.kayamaiuRL);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic YWRtaW46MTIzNA==');
        headers.append('X-API-KEY', 'CODEX@123');
    
        let options = new RequestOptions({ headers: headers });

        // return this.http
        // .get(url, options)
        // .map((response) => {
        //   console.log(response.json());
        //   return response.json()
        // })
        // .toPromise();
    
        return this.http
          .get(this.corsUrl+"/"+this.kayamaiuRL, options)
          .map((response) => {
            // console.log(response.json());
            return response.json()
          })
          .toPromise();
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