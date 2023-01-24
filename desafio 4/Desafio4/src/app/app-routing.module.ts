import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './pagina2/pagina2.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'pagina-2', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [PrincipalComponent, Pagina2Component]
})
export class AppRoutingModule { }
