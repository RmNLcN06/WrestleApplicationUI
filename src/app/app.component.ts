import { HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContinentListComponent } from './components/continent-list/continent-list.component';
import { ContinentDetailsComponent } from './components/continent-details/continent-details.component';
import { ContinentFormComponent } from './components/continent-form/continent-form.component';
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
    ContinentListComponent,
    ContinentDetailsComponent,
    ContinentFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}