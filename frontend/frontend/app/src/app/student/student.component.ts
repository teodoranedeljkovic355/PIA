
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/userModel';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem("user"));
    if(this.u==null || this.u.typeOf!="Student"){
      localStorage.clear();
      this.router.navigate(['']);
    }
  }
  u:User;
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  changePass(){
    this.router.navigate(['changePass']);
  }
}
