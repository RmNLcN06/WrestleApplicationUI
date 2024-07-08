import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Continent } from './models/continent';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ContinentComponent } from './components/continent/continent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, ContinentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WrestleApplicationUI';
  http = inject(HttpClient);

  continents = this.getContinents();

  private getContinents(): Observable<Continent[]>
  {
    return this.http.get<Continent[]>('https://localhost:7111/api/continents');
  }
}