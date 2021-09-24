import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css']
})
export class ResgistroComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ResgistroComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }
  atras(){
    this.dialogRef.close();
  }
}
