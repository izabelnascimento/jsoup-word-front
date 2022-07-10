import { Injectable } from '@angular/core';
import { Substantive } from './substantive';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubstantiveService {

  apiURL = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient
  ){}

  search(word: string): Observable<Substantive[]>{
    const url = `${this.apiURL}?word=${word}`;
    return this.http.get<Substantive[]>(url);
  }

  moreSearched(): Observable<Substantive>{
    const url = `${this.apiURL}/more-searched`;
    return this.http.get<Substantive>(url);
  }

}
