import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validator, Validators } from "@angular/forms";

@Component({
  selector: 'formulario-desde0',
  templateUrl: './formulario-desde0.component.html',
  styleUrls: ['./formulario-desde0.component.css']
})
export class FormularioDesde0Component implements OnInit {
  show: true;
  showdos: false;
  showtres: false;
  showcuatro: false;
  showcinco: false;
  showseis:false;
  showsiete:false;
  showocho:false;
  showid:true;
  showid2:false;
  showid3:false;
  showemail:true;
  showemail2:false;
  showemail3:false;
  showtel:true;
  showtel2:false;
  showtel3:false;
  showcal:true;
  showcal2:false;
  showimage:true;
  showimage2:false;
  showimage3:false;
  showmultiple:true;
  showmultiple2:false;
  showmultiple3:false;
  showmultiple4:false;
  showmultiple5:false;
  ejemplo:FormGroup;
  public page_title: string;
  constructor() {
  }
  ngOnInit(): void {
  }
 

  public afuConfig = {
    uploadAPI: {
      url: "https://example-file-upload-api"
    }
  };

 

  public cambiarfondo(f){
     console.log(f.value);
   var body=document.getElementById('pruebabody');
   body.style.backgroundColor=f.value;
   }

  public generar(){
    var el=document.getElementById('pruebabody');alert(el.outerHTML)
  }
  
}
