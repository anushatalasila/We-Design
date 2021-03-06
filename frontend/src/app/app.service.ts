import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
export class RestService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getUsers(): Observable<any> {
    return this.http.get(endpoint + 'users').pipe(
      map(this.extractData));
  }
  getUser(id): Observable<any> {
    return this.http.get(endpoint + 'users/' + id).pipe(
      map(this.extractData));
  }
  addUser (user): Observable<any> {
    console.log(user);
    return this.http.post<any>(endpoint + 'users', JSON.stringify(user), httpOptions).pipe(
      tap((product) => console.log(`added user w/ id=${user.id}`)),
      catchError(this.handleError<any>('addUser'))
    );
  }
  updateUser (id, user): Observable<any> {
    return this.http.put(endpoint + 'users/' + id, JSON.stringify(user), httpOptions).pipe(
      tap(_ => console.log(`updated user id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }
  deleteUser(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'users/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<any>('deleteUser'))
    );
  }
  getHouses(): Observable<any> {
    return this.http.get(endpoint + 'houses').pipe(
      map(this.extractData));
  }
  getHouse(id): Observable<any> {
    return this.http.get(endpoint + 'houses/' + id).pipe(
      map(this.extractData));
  }
  addHouse (house): Observable<any> {
    console.log(house);
    return this.http.post<any>(endpoint + 'houses', JSON.stringify(house), httpOptions).pipe(
      tap((product) => console.log(`added house w/ id=${house.id}`)),
      catchError(this.handleError<any>('addHouse'))
    );
  }
  updateHouse (id, house): Observable<any> {
    return this.http.put(endpoint + 'houses/' + id, JSON.stringify(house), httpOptions).pipe(
      tap(_ => console.log(`updated house id=${id}`)),
      catchError(this.handleError<any>('updateHouse'))
    );
  }
  deleteHouse(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'houses/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted house id=${id}`)),
      catchError(this.handleError<any>('deleteHouse'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   console.error(error); 
   console.log(`${operation} failed: ${error.message}`);
     return of(result as T);
    };
  }
}
