import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private router:Router, private subjectService:SubjectsService, private userService:UserService) { }

  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem("user"));
    if(this.u == null || this.u.typeOf!='Admin')
    {
      this.router.navigate(['']);
      localStorage.clear();
    }
    this.updatingStudent = JSON.parse(localStorage.getItem("updatingStudent"));
    this.username = this.updatingStudent.username;
    this.oldUsernameS = this.updatingStudent.username;
    

      this.subjectService.getAllSubjects().subscribe((subjects: SubjectModel[])=>{
        this.subjects = subjects;
      })
      

    this.userService.findOneUpdated(this.username).subscribe((user:User)=>{
      this.updatingStudent = user;
    })
    this.updateStudent();
  }
  u:User;
  username:string;
  newNameS:string;
  newSurnameS:string;
  newUsernameS:string;
  newPasswordS:string;
  newStatusS:string;
  newStudiesTypeS:string;
  newIndexS:string;
  poruka:string;
  updatingStudent:User;
  oldUsernameS:string;
  subjects:SubjectModel[];

  updateStudent(){
    if(this.newUsernameS == "" || this.newUsernameS == null || this.newUsernameS==this.updatingStudent.username)
    this.newUsernameS = this.updatingStudent.username;

    if(this.newNameS==null || this.newNameS=="" || this.newNameS==this.updatingStudent.name)
    this.newNameS = this.updatingStudent.name;

    if(this.newPasswordS==null || this.newPasswordS=="" || this.newPasswordS== this.updatingStudent.password)
    this.newPasswordS = this.updatingStudent.password;

    if(this.newIndexS==null || this.newIndexS=="" || this.newIndexS==this.updatingStudent.index)
    this.newIndexS = this.updatingStudent.index;

    if(this.newStatusS==null || this.newStatusS=="" || this.newStatusS==this.updatingStudent.status)
    this.newStatusS = this.updatingStudent.status;

    if(this.newSurnameS==null || this.newSurnameS=="" || this.newSurnameS==this.updatingStudent.surname)
    this.newSurnameS = this.updatingStudent.surname;

    if(this.newStudiesTypeS == null || this.newStudiesTypeS=="" || this.newStudiesTypeS==this.updatingStudent.studiesType)
    this.newStudiesTypeS = this.updatingStudent.studiesType;

    this.userService.updateStudent(this.oldUsernameS, this.newUsernameS, this.newNameS, this.newSurnameS, this.newPasswordS, this.newIndexS, this.newStatusS, this.newStudiesTypeS).subscribe((odg)=>{
      if(odg['poruka']==-1)
      this.poruka = 'Desila se greska';
      else{
        this.userService.findOneUpdated(this.newUsernameS).subscribe((user: User)=>{
          this.updatingStudent = user;
          localStorage.setItem("updatingStudent", JSON.stringify(this.updatingStudent));
          
        })
      }
      this.oldUsernameS = this.newUsernameS;
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
