import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {}

  public httpOptions: {} = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    method: 'GET', // GET, POST, PUT, DELETE
    mode: 'no-cors' // the most important option
  }

  getJSON(id): Observable <any[]> {
    if (id === 'products') {
      return this.http.get<any[]>('https://51.255.166.155:1352/tig/products/?format=json', this.httpOptions)
    } else {
      return this.http.get<any[]>('../assets/' + id + '.json')
    }
  }
}
