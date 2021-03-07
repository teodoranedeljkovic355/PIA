import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-informations-subject',
  templateUrl: './informations-subject.component.html',
  styleUrls: ['./informations-subject.component.css']
})
export class InformationsSubjectComponent implements OnInit {

  constructor(private router:Router, private subjectService:SubjectsService) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")!=null)
    this.flagButton = 1;
    this.sub = JSON.parse(localStorage.getItem('subject'));
    this.u = JSON.parse(localStorage.getItem("user"));

     //Zabrana da klikom na dugme labaratory bude izbacena iz sistema
     if(!(this.u.subjects.includes(this.sub.subjectCode)) || this.u.typeOf!="Student")
     {
       
       this.router.navigate(['']);
 
     }

   
    this.name = this.sub.name;
    this.subjectService.getSubjectInfo(this.name).subscribe((sub:SubjectModel)=>{
      this.sub=sub;
    })
  }

  sub: SubjectModel;
  u:User;
  name: string;
  flagButton:number;

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  route(){
    this.router.navigate(['infoSubject'])
  }
}
