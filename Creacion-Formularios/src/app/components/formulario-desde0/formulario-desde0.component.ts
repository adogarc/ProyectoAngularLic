import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-desde0',
  templateUrl: './formulario-desde0.component.html',
  styleUrls: ['./formulario-desde0.component.css']
})
export class FormularioDesde0Component implements OnInit {
  show: true;
  showdos:false;
  showtres:false;
  showcuatro:false;
  showcinco:false;
  btnon:true;
  public page_title: string;
  constructor() {
  }
  ngOnInit(): void {
  }

}
