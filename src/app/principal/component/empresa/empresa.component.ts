import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'primeng/api';
import { EEmpresa } from 'src/app/domain/constantes/e-empresa.enum';
import { EOperacion } from 'src/app/domain/constantes/e-operacion.enum';
import { ERespuesta } from 'src/app/domain/constantes/e-respuesta.enum';
import { ESistema } from 'src/app/domain/constantes/e-sistema.enum';
import { EmpresaDTO } from 'src/app/domain/dto/empresa-dto';
import { RespuestaDTO } from 'src/app/domain/dto/respuesta-dto';
import { AddEmpresaComponent } from './add-empresa/add-empresa.component';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
  providers: [MessageService]
})
export class EmpresaComponent implements OnInit {
  //Variable de empresas
  empresas: EmpresaDTO[];
  //variable de empresa
  empresa: EmpresaDTO;

  displayedColumns: string[] = [EEmpresa.LABEL_NIT, EEmpresa.LABEL_NOMBRE, EEmpresa.LABEL_CORREO, EEmpresa.LABEL_ESTADO, EEmpresa.LABEL_ACCION];
  dataSource: MatTableDataSource<EmpresaDTO>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private messageService: MessageService) {
    this.empresa = new EmpresaDTO();
  }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.empresas);
  }

  openDialogEditar(empresa: EmpresaDTO): void {
    empresa.operacion = EOperacion.EDITAR;
    let empe = new EmpresaDTO();
    empe = empe.deepCopy(empresa) as EmpresaDTO;
    const ref = this.dialog.open(AddEmpresaComponent, {
      data: empe
    });
    ref.afterClosed().subscribe((result: RespuestaDTO) => {
      if (result) {
        if (result.code == ERespuesta.OK && result.operacion == EOperacion.EDITAR) {
          //buscar el registro para actualizarlo
          for (let index = 0; index < this.empresas.length; index++) {
            const emp = this.empresas[index];
            if (emp.empresa.nit === result.empresa.empresa.nit && emp.empresa.correo === result.empresa.empresa.correo) {
              this.empresas.splice(index, 1, result.empresa);
              break;
            }
          }
          this.cargarData();
        }
      }
    });
  }
  //Abrir add-empresa con funcion persistir
  openDialog(): void {
    const empresa = new EmpresaDTO();
    empresa.operacion = EOperacion.PERSISTIR;
    const ref = this.dialog.open(AddEmpresaComponent, {
      data: empresa
    });
    ref.afterClosed().subscribe((result: RespuestaDTO) => {
      if (result) {
        if (result.code == ERespuesta.OK && result.operacion == EOperacion.PERSISTIR) {
          if(!this.empresas){
            this.empresas = [result.empresa];
          }else{
            this.empresas.push(result.empresa);
          }
          this.messageService.add({ severity: ESistema.TOAST_SUCCESS, summary: EEmpresa.EMPRESA, detail: ERespuesta.ALMACENADO });
          this.cargarData();
        }
      }
    });
  }

  cargarData() {
    this.dataSource = new MatTableDataSource(this.empresas);
    this.dataSource.filterPredicate = (data: EmpresaDTO, filter: string) => {
      if (data.empresa.nombre) {
        const val = data.empresa.nombre.toLowerCase().indexOf(filter.toLowerCase()) != -1;
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
