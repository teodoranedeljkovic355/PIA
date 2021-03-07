import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-else-bsc',
  templateUrl: './else-bsc.component.html',
  styleUrls: ['./else-bsc.component.css']
})
export class ElseBSCComponent implements OnInit {

  constructor(private subjectService: SubjectsService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")!=null)
    this.flagButton = 1;

    this.subjectService.get1SemElse().subscribe((subjects:SubjectModel[])=>{
      this.sem1Else = subjects;
    })
    this.subjectService.get2SemElse().subscribe((subjects:SubjectModel[])=>{
      this.sem2Else = subjects;
    })
    this.subjectService.get3SemElse().subscribe((subjects:SubjectModel[])=>{
      this.sem3Else = subjects;
    })
    this.subjectService.get4SemElse().subscribe((subjects:SubjectModel[])=>{
      this.sem4Else = subjects;
    })
    this.subjectService.get5SemElse().subscribe((subjects:SubjectModel[])=>{
      this.sem5Else = subjects;
    })
    this.subjectService.get6SemElse().subscribe((subjects:SubjectModel[])=>{
      this.sem6Else = subjects;
    })
    this.subjectService.get7SemElse().subscribe((subjects:SubjectModel[])=>{
      this.sem7Else = subjects;
    })
    this.subjectService.get8SemElse().subscribe((subjects:SubjectModel[])=>{
      this.sem8Else = subjects;
    })
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
    if(this.user == null || this.username==null || this.username== ""){
      this.flag = 0;
    } 
    else this.flag=1;
  }
  flagButton:number;
  sem1Else: SubjectModel [];
  sem2Else: SubjectModel [];
  sem3Else: SubjectModel [];
  sem4Else: SubjectModel [];
  sem5Else: SubjectModel [];
  sem6Else: SubjectModel [];
  sem7Else: SubjectModel [];
  sem8Else: SubjectModel [];
  user:User;
  flag :number;
  username:string;

  showAbout(sub: SubjectModel){
    localStorage.setItem('subject', JSON.stringify(sub));
    this.router.navigate(['infoSubject']);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
