import { Routes } from '@angular/router';
import { HomeComponent } from './interfaces/home/home.component';
import { provideRouter } from '@angular/router';
import { ServicesComponent } from './interfaces/services/services.component';
import { AboutWeComponent } from './interfaces/about-we/about-we.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },

    { path: 'servicios', component: ServicesComponent },

    { path: 'sobre-nosotros', component: AboutWeComponent }

];


export const appRoutingProviders = [
    provideRouter(routes)
];
