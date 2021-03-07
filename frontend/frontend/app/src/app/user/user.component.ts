import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ruter:Router) { }

  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem('user'));
    if(this.u==null || this.u.typeOf!='Employee')
    {
      this.ruter.navigate(['']);
      localStorage.clear();
    }
    this.username = this.u.username;
  }

  refresh(){
    
    window.location.reload();
  }
  u: User;
  username:string;

  logout(){
    localStorage.clear();
    this.ruter.navigate(['']);
  }
  route(){
    this.ruter.navigate(['user']);
  }
  route1(){
    this.ruter.navigate(['user/userProfile']);
  }
  route2(){
    this.ruter.navigate(['user/profSubjects']);
  }
  route3(){
    this.ruter.navigate(['user/news']);
  }
  changePass(){
    this.ruter.navigate(['changePass']);
  }
  
}
