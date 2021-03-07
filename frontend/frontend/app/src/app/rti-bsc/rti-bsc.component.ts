import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-rti-bsc',
  templateUrl: './rti-bsc.component.html',
  styleUrls: ['./rti-bsc.component.css']
})
export class RtiBSCComponent implements OnInit {

  constructor(private subjectService: SubjectsService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")!=null)
    this.flagButton = 1;

    this.subjectService.get1SemSub().subscribe((subjects:SubjectModel[])=>{
      this.sem1Sub = subjects;
    })
    this.subjectService.get2SemSub().subscribe((subjects:SubjectModel[])=>{
      this.sem2Sub = subjects;
    })
    this.subjectService.get3SemSub().subscribe((subjects:SubjectModel[])=>{
      this.sem3Sub = subjects;
    })
    this.subjectService.get4SemSub().subscribe((subjects:SubjectModel[])=>{
      this.sem4Sub = subjects;
    })
    this.subjectService.get5SemSub().subscribe((subjects:SubjectModel[])=>{
      this.sem5Sub = subjects;
    })
    this.subjectService.get6SemSub().subscribe((subjects:SubjectModel[])=>{
      this.sem6Sub = subjects;
    })
    this.subjectService.get7SemSub().subscribe((subjects:SubjectModel[])=>{
      this.sem7Sub = subjects;
    })
    this.subjectService.get8SemSub().subscribe((subjects:SubjectModel[])=>{
      this.sem8Sub = subjects;
    })
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
    if(this.user == null || this.username==null || this.username== ""){
      this.flag = 0;
    } 
    else this.flag=1;
  }
  user:User;
  flagButton:number;
  flag :number;
  username:string;
  sem1Sub: SubjectModel [];
  sem2Sub: SubjectModel [];
  sem3Sub: SubjectModel [];
  sem4Sub: SubjectModel [];
  sem5Sub: SubjectModel [];
  sem6Sub: SubjectModel [];
  sem7Sub: SubjectModel [];
  sem8Sub: SubjectModel [];

  showAbout(sub: SubjectModel){
    localStorage.setItem('subject', JSON.stringify(sub));
    this.router.navigate(['infoSubject']);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
