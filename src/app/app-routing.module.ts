import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuprincipalComponent } from './pages/menuprincipal/menuprincipal.component';

const routes: Routes = [
  
  {path: '', redirectTo: "/dashboard", pathMatch: "full"},
  {path: '**', component: MenuprincipalComponent},
  {path: 'dashboard', component: MenuprincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
