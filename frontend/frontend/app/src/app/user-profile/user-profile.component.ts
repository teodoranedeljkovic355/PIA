import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employeeModel';
import { User } from '../model/userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService, private ruter:Router) { }

  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem('user'));
    if(this.u.typeOf!='Employee')
    {
      this.ruter.navigate(['']);
      localStorage.clear();
    }
    this.username = this.u.username;
    this.userService.findOneUpdated(this.username).subscribe((user:User)=>{
      this.u = user;
    })
    this.changeUserData();
  }


 u : User;
 poruka:string;
 username: string;
 newAdress: string;
 newMobile: string;
 newPersonalData: string;
 newRoomNumber: string;

 changeUserData(){
  if(this.newAdress == null || this.newAdress == "" || this.newAdress == this.u.adress)
  this.newAdress = this.u.adress;
  if(this.newMobile == null || this.newMobile == "" || this.newMobile == this.u.mobilePhone)
  this.newMobile = this.u.mobilePhone;
  if(this.newPersonalData == null || this.newPersonalData=="" || this.newPersonalData==this.u.personalData)
  this.newPersonalData = this.u.personalData;
  if(this.newRoomNumber == null || this.newRoomNumber == "" || this.newRoomNumber == this.u.roomNumber)
  this.newRoomNumber = this.u.roomNumber;

  this.userService.changeUserData(this.username, this.newAdress, this.newMobile, this.newPersonalData, this.newRoomNumber).subscribe((odg)=>{
    if(odg['poruka']==-1)
    this.poruka = "desila se greska";
    else{
      this.userService.findOneUpdated(this.username).subscribe((user:User)=>{
        this.u = user;
        localStorage.setItem("user", JSON.stringify(user));
      })
    }
  })
}

 findOneUpdated(){
   this.userService.findOneUpdated(this.username).subscribe((user:User)=>{
     if(user){
       localStorage.setItem("user",JSON.stringify(user));
     }
     else{ console.log('err');}
   })
 }
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


}
