import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IRockband, IRockband2 } from '../interfaces/rockband';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpointRockbands = 'http://localhost:9000/rockband';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  /**
   * Get all Rock Bands
   * 
   * @returns 
   */
  getRockbands(): Observable<IRockband[]> {
    return this.httpClient.get<IRockband[]>(this.endpointRockbands)
      .pipe(
        tap(rockbands => console.log('Rockbands retrieved!')),
        catchError(this.handleError<IRockband[]>('Get Rockbands', []))
      );
  }

  /**
   * Get Rock Band item
   *
   * @param id;
   * @returns;
   */
   public getRockband(id): Observable<IRockband[]> {
    return this.httpClient.get<IRockband[]>(this.endpointRockbands + '/' + id)
      .pipe(
        tap(_ => console.log(`Rock Band fetched: ${id}`)),
        catchError(this.handleError<IRockband[]>(`Get Rock Band id=${id}`))
      );
  }

  /**
   * Update Rock Band
   * 
   * @param id 
   * @param rockband 
   * @returns 
   */
  public updateRockband(id, rockband: IRockband): Observable<any> {
    return this.httpClient.put(this.endpointRockbands + '/' + id, JSON.stringify(rockband), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Rock Band updated: ${id}`)),
        catchError(this.handleError<IRockband>('Update Rock Band'))
      );
  }

  /**
   * Add Rock Band
   * 
   * @param rockband 
   * @returns 
   */
  public addRockband(rockband: IRockband2): Observable<any> {
    return this.httpClient.post<IRockband>(this.endpointRockbands, JSON.stringify(rockband), this.httpOptions)
      .pipe(
        catchError(this.handleError<IRockband2>('Error occured'))
      );
  }

  /**
   * Delete Rock Band
   * 
   * @param id
   * @returns
   */
  public deleteRockband(id): Observable<IRockband[]> {
    return this.httpClient.delete<IRockband[]>(this.endpointRockbands + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Rock Band deleted: ${id}`)),
        catchError(this.handleError<IRockband[]>('Delete Rock Band'))
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
