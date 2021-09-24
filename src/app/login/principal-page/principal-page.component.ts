import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResgistroComponent } from '../login/resgistro/resgistro.component';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog,) {
  }

  ngOnInit(): void {
  }
  continuar() {
    this.router.navigate(['Login']);
  }
  register(): void {
    const ref = this.dialog.open(ResgistroComponent, {
      data: ''
    });
  }
}
