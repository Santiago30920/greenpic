import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  showFiller = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  empresa(){
    this.router.navigate(['principal/'+'empresa']);
  }
  usuario(){
    this.router.navigate(['principal/'+'usuario']);
  }

  salir(){
    this.router.navigate(['']);
  }

}
