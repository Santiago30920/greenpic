export class GenericoDTO {
  /**
   * Que se realiza con el dto persistir, editar, listar
   */
  operacion: number;
  /**
   * retorna el nuevo objecto clonado
   * @param objeto a clonar
   */

  deepCopy(obj: any) {
    let copy: any;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }
  }
}
