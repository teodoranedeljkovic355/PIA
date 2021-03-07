import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/userModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private ruter:Router) { }
navFlag:string;
  // ngOnInit(): void {
  //   console.log(this.user);
  //   this.user = JSON.parse(localStorage.getItem("user"));
  //   console.log(this.user);
    // this.username = this.user.username;
    // if(this.user == null || this.username==null || this.username== ""){
    //   this.flag = 0;
    // } 
    // else this.flag=1;
  // }
  
  
  
  // logout(){
  //   localStorage.clear();
  //   this.ruter.navigate(['']);

  // }
  // flagg:number;
  // flag:number;
  // user:User;
  // username:string;
  routeRTI(){
    localStorage.setItem("smer", "RTI");
  }
  routeSI(){
    localStorage.setItem("smer", "SI");
  }
  routeELSE(){
    localStorage.setItem("smer", "ELSE");
  }
  routeMASTER(){
    localStorage.setItem("smer", "MASTER");
  }
  
}
