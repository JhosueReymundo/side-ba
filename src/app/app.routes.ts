import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./shared/components/layout/layout.component'),
        children:[
            {
                path:'dashboard',
                loadComponent:()=>import('./bussines/dashboard/dashboard.component'),                
            },
            {
                path:'inicio',
                loadComponent:()=>import('./bussines/inicio/inicio.component'),
            }
        ]
    }
];
