import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fromulario-creado1',
  templateUrl: './fromulario-creado1.component.html',
  styleUrls: ['./fromulario-creado1.component.css']
})
export class FromularioCreado1Component implements OnInit {
public page_title:string;

  constructor() {
    this.page_title='usa nuestro formulario'
   }

  ngOnInit(): void {
  }

}
