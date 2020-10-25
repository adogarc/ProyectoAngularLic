import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-formularios',
  templateUrl: './menu-formularios.component.html',
  styleUrls: ['./menu-formularios.component.css']
})
export class MenuFormulariosComponent implements OnInit {
public page_title:string;
  constructor() {
    this.page_title='MenuFuncional';
   }

  ngOnInit(): void {
  }

}
