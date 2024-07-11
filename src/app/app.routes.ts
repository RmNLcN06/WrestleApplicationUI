import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentListComponent } from './components/continent-list/continent-list.component';
import { ContinentDetailsComponent } from './components/continent-details/continent-details.component';
import { ContinentFormComponent } from './components/continent-form/continent-form.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
        path: 'continents',
        title: 'Continents Page',
        component: ContinentListComponent,
    },
    {
        path: 'continents/:id',
        title: 'Continent Page',
        component: ContinentDetailsComponent,
    },
    {
        path: 'add-continent',
        title: 'Add Continent Page',
        component: ContinentFormComponent,
    },
    {
        path: 'edit-continent/:id',
        title: 'Edit Continent Page',
        component: ContinentFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
