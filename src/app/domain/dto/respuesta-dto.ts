import { EmpresaDTO } from "./empresa-dto";
import { UsuarioDTO } from "./usuario-dto";

export class RespuestaDTO {
  code: string;
  message: string;
  //Empresa del servicio
  empresa: EmpresaDTO;
  // lista de empresas
  empresas: EmpresaDTO[];
  //Usuario del servicio
  usuario: UsuarioDTO;
  // lista de usuario
  usuarios: UsuarioDTO[];
  //operacion
  operacion: number;
  res: any;

}
