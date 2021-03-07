import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  usernameS: string;
  passwordS: string;
  index:string;
  studiesType:string;
  nameS: string;
  surnameS: string;
  statusS: string;
  message:string;
  f:boolean;

  register(){
    
    this.userService.register(this.usernameS, this.passwordS,this.index,
      this.studiesType, this.nameS, this.surnameS, this.statusS).subscribe(ob=>{
      if(ob['user']=='ok'){
        alert("You registered successfully!");
        this.router.navigate(['']);
      } else alert("You must fill whole form!")
    })
  }


  validate(){
    this.f=false;
    this.message="";
    if (this.usernameS==undefined || this.usernameS=="" || this.usernameS==null){
      this.message+="Please fill in username.\n";
      this.f = false;
    }
    else if (!(this.usernameS.endsWith("student.etf.rs"))){
      this.message+="Username must end with student.etf.rs";
      this.f = false;
    }
    else if(this.passwordS==undefined || this.passwordS=="" || this.passwordS==null){
      this.message+= "Please fill in password.\n";
      this.f = false;
    } else if(this.studiesType == undefined){
      this.message+=" Please choose type.\n"
      this.f = false;
    }
      else if(this.index == "" || this.index==undefined){
        this.message += "Please fill in index number";
        this.f = false;
    } else if(this.nameS == "" || this.nameS==undefined){
      this.message += "Please fill in your name."
      this.f = false;
    }
    else if(this.surnameS == "" || this.surnameS==undefined){
      this.message += "Please fill in your surname."
      this.f = false;
    }
    else if(this.statusS == undefined){
      this.message += "Please choose status."
      this.f = false;
    }
    else{
      this.f = true;
      if(this.f==true)
      this.register();
    }
  } 
}
