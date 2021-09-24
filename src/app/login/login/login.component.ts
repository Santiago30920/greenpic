import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog,) {
  }

  ngOnInit(): void {
  }

  atras() {
    this.router.navigate(['']);
  }
  /**
   * Funcion que me permite abrir el modal de recuperar constraseña
   */
  cambiarPassword(): void {
    const ref = this.dialog.open(RecoverPassComponent, {
      data: ''
    });
  }
  IniciarSesion(){
    this.router.navigate(['principal/empresa']);
  }
}
