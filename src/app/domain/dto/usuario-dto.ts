import { GenericoDTO } from "./generico-dto";
import { Usuario } from "../modelo/usuario";

export class UsuarioDTO extends GenericoDTO{
  /**
   * Objeto a gestionar
   */
  usuario: Usuario;
  constructor() {
    super();
    this.usuario = new Usuario();
  }
}
