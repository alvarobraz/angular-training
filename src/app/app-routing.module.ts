import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path : '', component: HomeComponent, pathMatch: 'full' },
  {
    path : '',
    loadChildren: () => import('./description/description.module').then(m => m.DescriptionModule)
  },
  { path : '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
