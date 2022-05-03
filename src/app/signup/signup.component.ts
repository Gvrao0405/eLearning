import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username : string ="";
  email : string="";
  password : string ="";
  passwordShow : string ="";

  show: boolean= false;
  access : boolean = true;
  // hide : boolean =true;
  submit(){ 
  console.log("user name is " + this.username +"password is"+  this.password)
  if(this.username === "abc" && this.password ==="123"){
    
    this.access = true;
    alert("true")
  }
  this.clear();
  }
  clear(){
    this.username ="";
    this.password = "";
    this.passwordShow ="";
    this.show = true;
    this.email ="";
    }

  constructor() { }

  ngOnInit(): void {
  }
  

}
