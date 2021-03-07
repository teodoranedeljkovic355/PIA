import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService: UserService,private ruter:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    // if(this.user.numOfLogin!=0){
    //   localStorage.clear();
    //   this.ruter.navigate(['']);
    // }
    if(this.user==null){
      localStorage.clear();
      this.ruter.navigate(['']);
    }
  }

  oldPass: String;
  newPass: String;
  pass:string;
  user : User;
  ss: User;
  message:string;

  changePass(){
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userService.oldPass(this.user.username,0).subscribe(ob=>{
        this.pass=ob['pass'];
        if(this.oldPass!=this.pass){
          this.message = "Please type old password correctly!"
        }else{
          
          this.ss = JSON.parse(localStorage.getItem("user"));
         this.userService.change(this.ss.username,this.newPass).subscribe();
         alert("You successfully changed your password!");
         localStorage.clear();
         this.ruter.navigate(['']);
        }
    });
  }
  
}
