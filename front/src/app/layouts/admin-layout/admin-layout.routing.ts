import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TableComponent } from '../../pages/table/table.component';
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { CitiesComponent } from '../../pages/cities/cities.component';
import { StatesComponent } from '../../pages/states/states.component';
import { CountryComponent } from '../../pages/country/country.component';

export const AdminLayoutRoutes: Routes = [
    // { path: 'homepage',      component: DashboardComponent },
    { path: 'cities/:sigla',          component: StatesComponent },
    { path: 'table',          component: TableComponent },
    { path: 'homepage',          component: CountryComponent },
];
