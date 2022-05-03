import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username : string ="";
  password : string ="";
  show: boolean= false;
  access : boolean = true;
  // hide : boolean =true;
  submit(){ 
  console.log("user name is " + this.username +"password is"+  this.password)
  if(this.username === "admin" && this.password ==="admin"){
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
