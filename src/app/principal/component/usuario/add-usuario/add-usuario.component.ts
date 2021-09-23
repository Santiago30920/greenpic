import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { EOperacion } from 'src/app/domain/constantes/e-operacion.enum';
import { ERespuesta } from 'src/app/domain/constantes/e-respuesta.enum';
import { ESistema } from 'src/app/domain/constantes/e-sistema.enum';
import { RespuestaDTO } from 'src/app/domain/dto/respuesta-dto';
import { UsuarioDTO } from 'src/app/domain/dto/usuario-dto';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css'],
  providers: [MessageService]
})
export class AddUsuarioComponent implements OnInit {

  /**
   * Atributo encargado de gestionar la información de la usuario
   */
   usuario: UsuarioDTO;
   /**
    * Indica si los campos se pueden editar
    */
   disable = false;
   load: boolean;
   res: RespuestaDTO;

   //Abriendo constructor
   constructor(private messageService: MessageService, private dialogRef: MatDialogRef<AddUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UsuarioDTO) {
     this.usuario = data;
     //Determinando si es editar o persitir
     if (this.usuario.operacion === EOperacion.EDITAR) {
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
     switch (this.usuario.operacion) {
       case EOperacion.PERSISTIR:
         if (this.usuario.usuario.nombres && this.usuario.usuario.apellidos && this.usuario.usuario.correo && this.usuario.usuario.tidentifi &&
          this.usuario.usuario.nidentifi && this.usuario.usuario.empresaLabel) {
           this.load = true;
           this.usuario.usuario.estado = true;
           this.res.code = ERespuesta.OK;
           this.res.operacion = EOperacion.PERSISTIR;
           this.res.usuario = this.usuario;
           this.dialogRef.close(this.res);
         }else{
           this.messageService.add({ severity: ESistema.TOAST_ERROR, summary: ERespuesta.ERROR_M, detail: ERespuesta.CAMPO_REQUERIDO });
         }
         break;
       case EOperacion.EDITAR:
         if (this.usuario.usuario.nombres && this.usuario.usuario.apellidos && this.usuario.usuario.correo && this.usuario.usuario.tidentifi &&
          this.usuario.usuario.nidentifi && this.usuario.usuario.empresaLabel && this.usuario.usuario.estado) {
           this.load = true;
           this.res.code = ERespuesta.OK;
           this.res.usuario = this.usuario
           this.res.operacion = EOperacion.EDITAR;
           this.dialogRef.close(this.res);
         }else{
           this.messageService.add({ severity: ESistema.TOAST_ERROR, summary: ERespuesta.ERROR_M, detail: ERespuesta.CAMPO_REQUERIDO});
         }
         break;
     }
   }

   getErrorCampoRequerido(): string {
     return ERespuesta.CAMPO_REQUERIDO;
   }
}
