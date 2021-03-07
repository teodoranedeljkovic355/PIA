import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {

  constructor(private router:Router, private subjectService:SubjectsService) { }

  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem("user"));
    if(this.u == null || this.u.typeOf!='Admin')
    {
      localStorage.clear();
      this.router.navigate(['']);
    }
    this.updatingSubject = JSON.parse(localStorage.getItem("updatingSubject"));
    this.subjectCode = this.updatingSubject.subjectCode;
    this.oldSubjectCode = this.updatingSubject.subjectCode;
    this.subjectService.getSubjectByCode(this.subjectCode).subscribe((subject:SubjectModel)=>{
      this.updatingSubject = subject;
    })
    this.updateSubject();
  }
  u:User;
  updatingSubject:SubjectModel;
  newNameOfSubject: string;
  newSubjectCode:string;
  newTypeOfSubject:string;
  newYearOfStudies:number;
  newClassesFond:number;
  newGoalOfSubject: string;
  newNumberOfPoints:number;
  newOutcomeOfSubject:string;
  newExcerciseTerm:string;
  newPropositions: string;
  newLectureTerm:string;
  newLaboratory:string;
  newSemester:number;
  newMaster:number;
  newMasterCheck: boolean;
  poruka: string;
  subjectCode:string;
  subject: SubjectModel;
  oldSubjectCode:string;
  newDepartment:string;

  updateSubject(){


    if(this.newNameOfSubject==null || this.newNameOfSubject=="" || this.newNameOfSubject==this.updatingSubject.name)
     this.newNameOfSubject = this.updatingSubject.name;
   if(this.newSubjectCode==null || this.newSubjectCode=="" || this.newSubjectCode == this.updatingSubject.subjectCode)
     this.newSubjectCode=this.updatingSubject.subjectCode;

   if(this.newTypeOfSubject==null || this.newTypeOfSubject=="" || this.newTypeOfSubject==this.updatingSubject.typeOfSubject)
     this.newTypeOfSubject=this.updatingSubject.typeOfSubject;
    if(this.newYearOfStudies==null || this.newYearOfStudies==this.updatingSubject.yearOfStudies) 
    this.newYearOfStudies=this.updatingSubject.yearOfStudies;
   if(this.newClassesFond==null || this.newClassesFond == this.updatingSubject.classesFond)
     this.newClassesFond=this.updatingSubject.classesFond;
   if(this.newGoalOfSubject==null || this.newGoalOfSubject == "" || this.newGoalOfSubject==this.updatingSubject.goalOfSubject)
     this.newGoalOfSubject = this.updatingSubject.goalOfSubject;
    if(this.newNumberOfPoints==null || this.newNumberOfPoints==this.updatingSubject.numberOfPoints) 
    this.newNumberOfPoints = this.updatingSubject.numberOfPoints;
    if(this.newOutcomeOfSubject==null ||this.newOutcomeOfSubject=="" || this.newOutcomeOfSubject==this.updatingSubject.outcomeOfSubject) 
    this.newOutcomeOfSubject = this.updatingSubject.outcomeOfSubject;
    if(this.newExcerciseTerm==null || this.newExcerciseTerm == "" || this.newExcerciseTerm==this.updatingSubject.excerciseTerm) 
    this.newExcerciseTerm = this.updatingSubject.excerciseTerm;
    if(this.newPropositions==null || this.newPropositions=="" || this.newPropositions==this.updatingSubject.propositions)
     this.newPropositions = this.updatingSubject.propositions;
   if(this.newLectureTerm==null || this.newLectureTerm=="" || this.newLectureTerm==this.updatingSubject.lectureTerm)
    this.newLectureTerm = this.updatingSubject.lectureTerm;
   if(this.newLaboratory==null || this.newLaboratory == "" || this.newLaboratory==this.updatingSubject.laboratory)
    this.newLaboratory = this.updatingSubject.laboratory;
    if(this.newSemester==null || this.newSemester==this.updatingSubject.semester) 
    this.newSemester = this.updatingSubject.semester;
    if(this.newDepartment==null || this.newDepartment==this.updatingSubject.department) 
    this.newDepartment = this.updatingSubject.department;
    this.newMaster=this.updatingSubject.master;
    if(this.newMasterCheck==true) 
    this.newMaster = 1
    

      this.subjectService.updateSubject(this.oldSubjectCode, this.newNameOfSubject, this.newSubjectCode, this.newTypeOfSubject, this.newYearOfStudies, this.newClassesFond,this.newGoalOfSubject, this.newNumberOfPoints, this.newOutcomeOfSubject, this.newExcerciseTerm,this.newPropositions, this.newLectureTerm, this.newLaboratory, this.newSemester, this.newMaster, this.newDepartment).subscribe((odg)=>{
          if(odg['poruka']==-1){
            this.poruka = 'Desila se greska';
          }
          else{
            this.subjectService.getSubjectByCode(this.newSubjectCode).subscribe((subject: SubjectModel)=>{
              this.updatingSubject = subject;
              localStorage.setItem("updatingSubject",JSON.stringify(this.updatingSubject));

            })
          } this.oldSubjectCode = this.newSubjectCode;
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
