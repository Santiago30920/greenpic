import { EmpresaDTO } from "./empresa-dto";

export class RespuestaDTO {
  code: string;
  message: string;
  //Empresa del servicio
  empresa: EmpresaDTO;
  // lista de empresas
  empresas: EmpresaDTO[];
  //operacion
  operacion: number;
  res: any;
}
