import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { NewsServiceService } from '../news-service.service';
import { SubjectsService } from '../subjects.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private router:Router, private userService:UserService, private subjectService:SubjectsService,private newsService:NewsServiceService) { }

  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem("user"));
    if(this.u == null || this.u.typeOf!='Admin')
    {
      this.router.navigate(['']);
      localStorage.clear();
    }
    this.updatingUser = JSON.parse(localStorage.getItem("updatingUser"));
    this.username = this.updatingUser.username;
    this.oldUsername = this.updatingUser.username;
    this.userService.findOneUpdated(this.username).subscribe((user:User)=>{
      this.updatingUser = user;
    })
    this.subjects = this.updatingUser.subjects;
    this.subjectService.getAllSubjects().subscribe((subjects:SubjectModel[])=>{
      this.subs = subjects;
    })
    this.updateEmployee();
  }
  u:User;
  oldUsername:string;
subsString:Array<String>;
subs:Array<Object>;
username:string;
subjects:Array<Object>;
updatingUser:User;
newName:string;
newSurname:string;
newUsername:string;
newPassword:string;
newMobile:string;
newWebsite:string;
newPersonalData:string;
newAdress:string;
newProfession:string;
newRoomNumber: string;
newStatus:string;
newPicture:File;
newSubjects: Array<Object>;
poruka:string;

updateEmployee(){
  if(this.newUsername == null || this.newUsername=="" || this.newUsername==this.updatingUser.username)
  this.newUsername = this.updatingUser.username;

  if(this.newName==null || this.newName=="" || this.newName==this.updatingUser.name)
  this.newName = this.updatingUser.name;
  
  if(this.newSurname == null || this.newSurname == "" || this.newSurname == this.updatingUser.surname)
  this.newSurname = this.updatingUser.surname;

  if(this.newPassword == null || this.newPassword=="" || this.newPassword==this.updatingUser.password)
  this.newPassword = this.updatingUser.password;

  if(this.newMobile == null || this.newMobile == "" || this.newMobile == this.updatingUser.mobilePhone)
  this.newMobile = this.updatingUser.mobilePhone;

  if(this.newWebsite == null || this.newWebsite == "" || this.newWebsite == this.updatingUser.website)
  this.newWebsite = this.updatingUser.website;

  if(this.newPersonalData == null || this.newPersonalData == "" || this.newPersonalData == this.updatingUser.personalData)
  this.newPersonalData = this.updatingUser.personalData;

  if(this.newAdress == null || this.newAdress == "" || this.newAdress == this.updatingUser.adress)
  this.newAdress = this.updatingUser.adress;

  if(this.newProfession == "" || this.newProfession == null || this.newProfession == this.updatingUser.profession)
  this.newProfession = this.updatingUser.profession;
  
  if(this.newRoomNumber == "" || this.newRoomNumber == null || this.newRoomNumber == this.updatingUser.roomNumber)
  this.newRoomNumber = this.updatingUser.roomNumber;
  
  if(this.newStatus == "" || this.newStatus == null || this.newStatus == this.updatingUser.status)
  this.newStatus = this.updatingUser.status;

  
  if(this.newSubjects == null || this.newSubjects == this.updatingUser.subjects)
  this.newSubjects = this.updatingUser.subjects;

console.log(this.newSubjects)

  this.userService.updateEmployee(this.oldUsername,this.newUsername, this.newName, this.newSurname, this.newPassword, this.newMobile, this.newWebsite, this.newPersonalData, this.newAdress, this.newRoomNumber, this.newProfession, this.newStatus, this.newSubjects).subscribe((odg)=>{
    if(odg['poruka']==-1)
    {
      console.log("greska")
      this.poruka = 'Desila se greska';
    }
      else{
        this.userService.findOneUpdated(this.newUsername).subscribe((user: User)=>{
          this.updatingUser = user;
          localStorage.setItem("updatingUser", JSON.stringify(this.updatingUser));
          
        })
      }
      this.oldUsername = this.newUsername;
  })
}





fd = new FormData();

 createFormData(event){
   this.newPicture = <File>event.target.files[0];
   this.fd.append('file', this.newPicture, this.newPicture['name']);
 }
 
 upload(){
   this.fd.append('username',this.username);
   this.userService.upload(this.fd);
 }

changePicture(){
  this.upload();
  this.userService.changePicture(this.newPicture['name'], this.updatingUser.username).subscribe((ob)=>{
    if(ob['poruka']=="OK"){
      alert("You changed picture!");
      
    }
  })
}

logout(){
  localStorage.clear();
  this.router.navigate(['/']);
}

route(){
  this.router.navigate(['admin']);
}
}
