import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employeeModel';
import { User } from '../model/userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")!=null)
    this.flag = 1;
    localStorage.setItem("navFlag","staff")
    this.userService.getAllStaff().subscribe((users:User[])=>{
      this.allStaff = users;
    })
  }


  allStaff: User [];
  flag : number;
  showMore(staff: Employee){
    localStorage.setItem('staff',JSON.stringify(staff));
    this.router.navigate(['showMore']);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}

