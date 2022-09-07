import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrasilMapComponent } from './subComponents/brasil-map/brasil-map.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CountryModule } from "./pages/country/country.module";
import { ChartsComponent } from './subComponents/charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BrasilMapComponent,
    HomepageComponent,
    CitiesComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    ChartsModule,
    HttpClientModule,
    CountryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
