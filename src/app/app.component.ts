import { HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContinentComponent } from './components/continent/continent.component';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterModule, 
    RouterLink, 
    RouterOutlet, 
    HttpClientModule, 
    AsyncPipe, 
    ContinentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}