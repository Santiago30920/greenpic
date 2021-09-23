import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { EmpresaComponent } from './principal/component/empresa/empresa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmpresaComponent } from './principal/component/empresa/add-empresa/add-empresa.component';
import { UsuarioComponent } from './principal/component/usuario/usuario.component';
import { AddUsuarioComponent } from './principal/component/usuario/add-usuario/add-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    EmpresaComponent,
    AddEmpresaComponent,
    UsuarioComponent,
    AddUsuarioComponent,
  ],
  imports: [
    MatSidenavModule,
    MatSelectModule,
    RippleModule,
    BrowserAnimationsModule,
    ToastModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
