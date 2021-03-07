import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private subjectService: SubjectsService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")!=null)
    this.flagButton = 1;
    
    this.subjectService.getMasterSub().subscribe((subjects:SubjectModel[])=>{
      this.sem1Master = subjects;
    })
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
    if(this.user == null || this.username==null || this.username== ""){
      this.flag = 0;
    } 
    else this.flag=1;

  }
  flagButton:number;
  currentUserSubjects: SubjectModel[];
  currentUserSubjectsString:Array<Object>;
  user:User;
  flag :number;
  username:string;
  sem1Master: SubjectModel [];

  showAbout(sub: SubjectModel){
    localStorage.setItem('subject', JSON.stringify(sub));
    this.router.navigate(['infoSubject']);
  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
