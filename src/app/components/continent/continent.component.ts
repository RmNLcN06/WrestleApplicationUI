import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Continent } from '../../models/continent';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-continent',
  standalone: true,
  imports: 
  [
    RouterLink, 
    RouterOutlet, 
    HttpClientModule, 
    AsyncPipe, 
    ContinentComponent
  ],
  templateUrl: './continent.component.html',
  styleUrl: './continent.component.css'
})
export class ContinentComponent {
  title = 'WrestleApplicationUI';
  http = inject(HttpClient);

  continents = this.getContinents();

  private getContinents(): Observable<Continent[]>
  {
    return this.http.get<Continent[]>('https://localhost:7111/api/continents');
  }
}




