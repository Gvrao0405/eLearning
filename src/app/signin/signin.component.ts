import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username : string ="";
  password : string ="";
  show: boolean= false;
  access : boolean = true;
  // hide : boolean =true;
  submit(){ 
  console.log("user name is " + this.username +"password is"+  this.password)
  if(this.username === "abc" && this.password ==="123"){
    // alert("hi")
    this.access = true;
    this.show = true;

    // alert("true")
    setTimeout(() => {
      this.router.navigate(['/nav-bar']);
    }, 1000);
  }
  this.clear();
  }
  clear(){
    this.username ="";
    this.password = "";
    }
    constructor(private router: Router) { }

    ngOnInit(): void {
      
    }
 
  testLog(){
    alert("value")
  }

}
