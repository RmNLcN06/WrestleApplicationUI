import { Routes } from '@angular/router';
import { ContinentComponent } from './components/continent/continent.component';

export const routes: Routes = [
    {
        path: 'continents',
        title: 'Continent Page',
        component: ContinentComponent,
    }
];
