import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './principal/component/empresa/empresa.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent,
    children: [
      { path: 'empresa', component: EmpresaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
