import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RecoverPassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }
  atras(){
    this.dialogRef.close();
  }

}
