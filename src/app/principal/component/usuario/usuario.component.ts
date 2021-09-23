import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'primeng/api';
import { EUsuario } from 'src/app/domain/constantes/e-usuario.enum';
import { EOperacion } from 'src/app/domain/constantes/e-operacion.enum';
import { ERespuesta } from 'src/app/domain/constantes/e-respuesta.enum';
import { ESistema } from 'src/app/domain/constantes/e-sistema.enum';
import { RespuestaDTO } from 'src/app/domain/dto/respuesta-dto';
import { UsuarioDTO } from 'src/app/domain/dto/usuario-dto';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [MessageService]
})
export class UsuarioComponent implements OnInit {

  /**
  * Listado de usuarios
  */
  usuarios: UsuarioDTO[] = [];
  /**
  * Listado de usuario
  */
  usuario: UsuarioDTO;
  usuarios1: UsuarioDTO[];
  //Asignando valores a columnas
  displayedColumns: string[] = [EUsuario.LABEL_NOMBRE, EUsuario.LABEL_APELLIDOS, EUsuario.LABEL_CORREO, EUsuario.LABEL_ESTADO, EUsuario.LABEL_ACCION];
  dataSource: MatTableDataSource<UsuarioDTO>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //Incializando contrusctor
  constructor(public dialog: MatDialog, private messageService: MessageService) {
    this.usuario = new UsuarioDTO();
  }

  ngOnInit(): void {
  }

  openDialogEditar(usuario: UsuarioDTO): void {
    usuario.operacion = EOperacion.EDITAR;
    let usua = new UsuarioDTO();
    usua = usua.deepCopy(usuario) as UsuarioDTO;
    const ref = this.dialog.open(AddUsuarioComponent, {
      data: usua
    });
    ref.afterClosed().subscribe((result: RespuestaDTO) => {
      if (result) {
        if (result.code == ERespuesta.OK && result.operacion == EOperacion.EDITAR) {
          //buscar el registro para actualizarlo
          for (let index = 0; index < this.usuarios.length; index++) {
            const usu = this.usuarios[index];
            if (usu.usuario.nidentifi === result.usuario.usuario.nidentifi && usu.usuario.correo === result.usuario.usuario.correo) {
              this.usuarios.splice(index, 1, result.usuario);
              break;
            }
          }
          this.cargarData();
        }
      }
    });
  }
  //Abrir add-usuario con funcion persistir
  openDialog(): void {
    const user = new UsuarioDTO();
    user.operacion = EOperacion.PERSISTIR;
    const ref = this.dialog.open(AddUsuarioComponent, {
      data: user
    });
    ref.afterClosed().subscribe((result: RespuestaDTO) => {
      if (result) {
        if (result.code == ERespuesta.OK && result.operacion == EOperacion.PERSISTIR) {
          if(!this.usuarios1){
            this.usuarios1 = [result.usuario];
          }else{
            this.usuarios1.push(result.usuario);
          }
          this.messageService.add({ severity: ESistema.TOAST_SUCCESS, summary: EUsuario.USUARIO, detail: ERespuesta.ALMACENADO });
          this.cargarData();
        }
      }
    });
  }

  cargarData() {
    this.dataSource = new MatTableDataSource(this.usuarios1);
    this.dataSource.filterPredicate = (data: UsuarioDTO, filter: string) => {
      if (data.usuario.nombres) {
        const val = data.usuario.nombres.toLowerCase().indexOf(filter.toLowerCase()) != -1;
        return val;
      } else {
        return false;
      }
    }
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
