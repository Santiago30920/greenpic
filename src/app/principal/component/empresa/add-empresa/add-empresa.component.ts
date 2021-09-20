import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EOperacion } from 'src/app/domain/constantes/e-operacion.enum';
import { ERespuesta } from 'src/app/domain/constantes/e-respuesta.enum';
import { EmpresaDTO } from 'src/app/domain/dto/empresa-dto';
import { RespuestaDTO } from 'src/app/domain/dto/respuesta-dto';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styleUrls: ['./add-empresa.component.css']
})
export class AddEmpresaComponent implements OnInit {

  /**
   * Atributo encargado de gestionar la información de la empresa
   */
  empresa: EmpresaDTO;
  /**
   * Indica si los campos se pueden editar
   */
  disable = false;
  load: boolean;
  res: RespuestaDTO;

  //Abriendo constructor
  constructor(private dialogRef: MatDialogRef<AddEmpresaComponent>, @Inject(MAT_DIALOG_DATA) public data: EmpresaDTO) {
    this.empresa = data;
    //Determinando si es editar o persitir
    if (this.empresa.operacion === EOperacion.EDITAR) {
      this.disable = true;
    } else {
      this.disable = false;
    }
    this.load = false;
  }
  //comprobar que todo este bien
  ngOnInit(): void {
  }

  /**
   * Metodo que permite confirmar la acción del boton
   */
  confirmar() {
    this.res = new RespuestaDTO();
    switch (this.empresa.operacion) {
      case EOperacion.PERSISTIR:
        if (this.empresa.empresa.nombre && this.empresa.empresa.nit && this.empresa.empresa.correo && this.empresa.empresa.direccion && this.empresa.empresa.telefono) {
          this.load = true;
          this.empresa.empresa.estado = true;
          this.res.code = ERespuesta.OK;
          this.res.operacion = EOperacion.PERSISTIR;
          this.res.empresa = this.empresa
          this.dialogRef.close(this.res);
        }
        break;
      case EOperacion.EDITAR:
        if (this.empresa.empresa.nombre && this.empresa.empresa.nit && this.empresa.empresa.correo && this.empresa.empresa.direccion && this.empresa.empresa.telefono) {
          this.load = true;
          this.res.code = ERespuesta.OK;
          this.res.empresa = this.empresa
          this.res.operacion = EOperacion.EDITAR;
          this.dialogRef.close(this.res);
        }
        break;
    }
  }

  getErrorCampoRequerido(): string {
    return ERespuesta.CAMPO_REQUERIDO;
  }
}
