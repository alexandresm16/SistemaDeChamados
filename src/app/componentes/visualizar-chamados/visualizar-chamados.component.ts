import { Component, OnInit } from '@angular/core';
import {ChamadoService} from "../../app-core/servicos/chamado-service.service";

@Component({
  selector: 'app-visualizar-chamados',
  templateUrl: './visualizar-chamados.component.html',
  styleUrls: ['./visualizar-chamados.component.css']
})
export class VisualizarChamadosComponent implements OnInit {

  constructor(private chamadoService: ChamadoService) { }

  ngOnInit(): void {
  }

}
