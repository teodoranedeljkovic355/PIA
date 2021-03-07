import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-si-bsc',
  templateUrl: './si-bsc.component.html',
  styleUrls: ['./si-bsc.component.css']
})
export class SiBSCComponent implements OnInit {

  constructor(private subjectService: SubjectsService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")!=null)
    this.flagButton = 1;

    this.subjectService.get1SemSi().subscribe((subjects:SubjectModel[])=>{
      this.sem1Si = subjects;
    })

    this.subjectService.get2SemSi().subscribe((subjects:SubjectModel[])=>{
      this.sem2Si = subjects;
    })

    this.subjectService.get3SemSi().subscribe((subjects:SubjectModel[])=>{
      this.sem3Si = subjects;
    })

    this.subjectService.get4SemSi().subscribe((subjects:SubjectModel[])=>{
      this.sem4Si = subjects;
    })

    this.subjectService.get5SemSi().subscribe((subjects:SubjectModel[])=>{
      this.sem5Si = subjects;
    })

    this.subjectService.get6SemSi().subscribe((subjects:SubjectModel[])=>{
      this.sem6Si = subjects;
    })
    this.subjectService.get7SemSi().subscribe((subjects:SubjectModel[])=>{
      this.sem7Si = subjects;
    })
    this.subjectService.get8SemSi().subscribe((subjects:SubjectModel[])=>{
      this.sem8Si = subjects;
    })
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
    if(this.user == null || this.username==null || this.username== ""){
      this.flag = 0;
    } 
    else this.flag=1;
  }
  flagButton:number;
  user:User;
  flag :number;
  username:string;
  sem1Si: SubjectModel [];
  sem2Si: SubjectModel [];
  sem3Si: SubjectModel [];
  sem4Si: SubjectModel [];
  sem5Si: SubjectModel [];
  sem6Si: SubjectModel [];
  sem7Si: SubjectModel [];
  sem8Si: SubjectModel [];

  showAbout(sub: SubjectModel){
    localStorage.setItem('subject', JSON.stringify(sub));
    this.router.navigate(['infoSubject']);
  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
