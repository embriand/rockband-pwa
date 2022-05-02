import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IRockband, IRockband2 } from '../interfaces/rockband';
@Injectable({
  providedIn: 'root'
})
export class ApiInfinitScrollService {

  endpointRockbands = 'http://localhost:9000/rockband';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

    /**
     * Get all Rock Bands
     * 
     * @param args
     * @returns
     */
     getRockbands(args?: any): Observable<IRockband[]> {

       let url = this.endpointRockbands;
      //   'http://localhost:9000/rockband?limit=2&offset=1&sortBy=name' \
      //http://localhost:9000/rockband?limit=5&offset=4&sortBy=name

       if(args) {
        url = url + args;
       }

       console.log(url);
      return this.httpClient.get<IRockband[]>(url)
        .pipe(
          tap(rockbands => console.log('Rockbands retrieved!')),
          catchError(this.handleError<IRockband[]>('Get Rockbands', []))
        );
    }

      /**
   * Handle Errors
   *
   * @param operation
   * @param result
   * @returns
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
