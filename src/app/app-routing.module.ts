import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full' },
  {
    path : '',
    loadChildren: () => import('./description/description.module').then(m => m.DescriptionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
