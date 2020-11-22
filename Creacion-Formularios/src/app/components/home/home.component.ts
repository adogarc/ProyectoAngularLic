import { Component, OnInit } from '@angular/core';
import{sugerencias} from '../../models/sugerencias';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public sugerencia:sugerencias;
  constructor() {
    this.sugerencia=new sugerencias('','','');
   }

  ngOnInit(): void {
    
  }
  onSubmit(form){
    console.log(this.sugerencia);
  }
}
