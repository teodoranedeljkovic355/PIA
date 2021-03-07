import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private ruter: Router) { }

  ngOnInit(): void {
    localStorage.setItem("navFlag","home");
    this.u = JSON.parse(localStorage.getItem("user"));
    if(this.u!=null){
      if(this.u.typeOf=="Student")
      {
      this.ruter.navigate(['student']);
      }
      else if(this.u.typeOf=="Admin")
      {
        this.ruter.navigate(['admin']);
      }
      else {
        this.ruter.navigate(['user']);
      }
    }
  }
  u:User;
  message:string;
  username: string;
  password: string;
  typeOf: string;
  f:boolean;

  login(){
    this.userService.login(this.username, this.password, this.typeOf).subscribe((user:User)=>{
      if (user){
        localStorage.setItem("user", JSON.stringify(user));
        if(user.username!="admin"){
          if(user.numOfLogin==0){
            this.ruter.navigate(['/changePass']);
          }else if(user.employeeFlag==1){
            this.ruter.navigate(['/user']);
          } else if(user.employeeFlag==0){
            this.ruter.navigate(['student']);
          }
        }else this.ruter.navigate(['/admin']);
      }else
     alert("There is no user with this data!")
    })
  }

  logout(){
    localStorage.clear();
    this.ruter.navigate(['/login']);
  }

  validate(){
    this.f=false;
    if(this.username=="admin" && this.password=="admin"){
      this.login();
    }
    this.message="";
    if (this.username==undefined || this.username==""){
      this.message+="Please fill in username.\n"; this.f=false;
    }
    else if(this.password==undefined || this.password==""){
      this.message+= "Please fill in password.\n"; this.f=false;
    } else if(this.typeOf == undefined){
      this.message+=" Please choose type.\n"; this.f=false;
    }else if (!(this.username.endsWith("@student.etf.rs")) && (!(this.username.endsWith("@etf.bg.ac.rs")))){
      this.message+="Username must end with student.etf.rs or @etf.bg.ac.rs.\n"; this.f=false;
    }
    else{
      this.f=true;
      if(this.f)
    this.login();}
  }
}
