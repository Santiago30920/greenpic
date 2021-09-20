import { Empresa } from "../modelo/empresa";
import { GenericoDTO } from "./generico-dto";

export class EmpresaDTO extends GenericoDTO {
  /**
   * Objeto a gestionar
   */
  empresa: Empresa;
  constructor() {
    super();
    this.empresa = new Empresa()

  }
}
