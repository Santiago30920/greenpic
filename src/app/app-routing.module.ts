import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { EmpresaComponent } from './principal/component/empresa/empresa.component';
import { UsuarioComponent } from './principal/component/usuario/usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalPageComponent } from './login/principal-page/principal-page.component';


const routes: Routes = [
  {
    path: '', component:PrincipalPageComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    children: [
      { path: 'empresa', component: EmpresaComponent },
      { path: 'usuario', component: UsuarioComponent },
    ]
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
