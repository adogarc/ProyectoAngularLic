import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formularios-creado2',
  templateUrl: './formularios-creado2.component.html',
  styleUrls: ['./formularios-creado2.component.css']
})
export class FormulariosCreado2Component implements OnInit {
  public page_title:string;

  constructor() {
this.page_title="Usa nuestros formularios"
   }

  ngOnInit(): void {
  }

}
