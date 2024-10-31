import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private listaDeChamados: string[] = [];
  constructor() { }

  addtarefa(tarefa: string){
    this.listaDeChamados.push(tarefa);
    console.log("CHAMADO ADICIONADO",
      this.listaDeChamados);
  }
}
