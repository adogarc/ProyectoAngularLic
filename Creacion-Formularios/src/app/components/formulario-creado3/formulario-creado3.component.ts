import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-creado3',
  templateUrl: './formulario-creado3.component.html',
  styleUrls: ['./formulario-creado3.component.css']
})
export class FormularioCreado3Component implements OnInit {
public page_title:string;
  constructor() { 
    this.page_title='Te recomendamos nuestro formulario';
  }

  ngOnInit(): void {
  }

}
