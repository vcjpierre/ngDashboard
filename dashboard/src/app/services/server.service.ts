import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerMessage } from '../shared/server-message';
import { Server } from '../shared/server';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'q=0.8;application/json;q=0.9'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ServerService {

  constructor(private _http: HttpClient) {}  

  handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  getServers(): Observable<Server[]> {
    return this._http.get('http://localhost:5000/api/server')
      .pipe(map((res: any) => res));
  }

  handleServerMessage(msg: ServerMessage): Observable<Response> {
    const url = 'http://localhost:5000/api/server/' + msg.id;
    return this._http.put(url, msg, httpOptions)
      .pipe(map((res: any) => res));
  }
}
