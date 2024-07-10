import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Continent } from '../models/continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  private url = "continents";

  constructor(private http: HttpClient) { }

  // GET List of continents
  getContinents(): Observable<Continent[]>
  {
    return this.http.get<Continent[]>(`${environment.apiUrl}/${this.url}`);
  }

  // GET a continent
  getContinent(id: number): Observable<Continent>
  {
    return this.http.get<Continent>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  // POST a new continent
  addContinent(continent: Continent): Observable<Continent>
  {
    return this.http.post<Continent>(`${environment.apiUrl}/${this.url}`, continent);
  }

  // PUT an update to an existing continent
  updateContinent(continent: Continent): Observable<void>
  {
    return this.http.put<void>(`${environment.apiUrl}/${this.url}/${continent.idContinent}`, continent);
  }

  // DELETE an existing continent
  deleteContinent(id: number): Observable<void>
  {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${id}`);
  }
  
}
