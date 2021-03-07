import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-prof-subjects',
  templateUrl: './prof-subjects.component.html',
  styleUrls: ['./prof-subjects.component.css']
})
export class ProfSubjectsComponent implements OnInit {

  constructor(private ruter: Router, private subjectService:SubjectsService) { }

  ngOnInit(): void {
  
    this.mainInfoFlag=1;
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user.typeOf!="Employee")
    {
      localStorage.clear();
      this.ruter.navigate(['']);
    }
    this.username = this.user.username;
    this.subs = this.user.subjects;
    
    this.subjectService.getSubjectByCode(this.oldSubjectCode).subscribe((subject:SubjectModel)=>{
      this.subject = subject;
    })
    this.updateSubject();
  }

  searchThisSubject(){
    console.log(this.chosenSubject)
   this.subjectService.getSubjectByCode(this.chosenSubject).subscribe((s:SubjectModel)=>{
     this.subject = s;

     console.log("ovo je predmet")
     console.log(this.subject)
     this.oldSubjectCode = this.subject.subjectCode;
    console.log("oldsubjcode")
    console.log(this.oldSubjectCode)
    
    this.subjectService.getSubjectByCode(this.oldSubjectCode).subscribe((subject:SubjectModel)=>{
    this.subject = subject;
   })
   this.updateSubject();
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
  user:User;
  subs:Array<Object>;
  username:string;
  chosenSubject: string;
  subject:SubjectModel;
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
  oldSubjectCode:string;
  mainInfoFlag:number;
  lecturesFlag:number;
  examQuestionsFlag:number;
  excercisesFlag:number;
  laboratoryFlag:number;
  newDepartment:string;
  pictureLab:File;
  pictureLectures:File;
  pictureExamQ:File;
  pictureExcercises:File;
  commentLab:String;

mainInfo(){
  this.mainInfoFlag=1;
  this.lecturesFlag=0;
  this.examQuestionsFlag=0;
  this.excercisesFlag=0;
  this.laboratoryFlag=0;
}
lectures(){
  this.mainInfoFlag=0;
  this.lecturesFlag=1;
  this.examQuestionsFlag=0;
  this.excercisesFlag=0;
  this.laboratoryFlag=0;
}
excercises(){
  this.mainInfoFlag=0;
  this.lecturesFlag=0;
  this.examQuestionsFlag=0;
  this.excercisesFlag=1;
  this.laboratoryFlag=0;
}
laboratory(){
  this.mainInfoFlag=0;
  this.lecturesFlag=0;
  this.examQuestionsFlag=0;
  this.excercisesFlag=0;
  this.laboratoryFlag=1;
}
examQuestions(){
  this.mainInfoFlag=0;
  this.lecturesFlag=0;
  this.examQuestionsFlag=1;
  this.excercisesFlag=0;
  this.laboratoryFlag=0;
}


fd = new FormData();

createFormData1(event){
  this.pictureLectures = <File>event.target.files[0];
  this.fd.append('file', this.pictureLectures, this.pictureLectures['name']);
}
createFormData2(event){
  this.pictureLab = <File>event.target.files[0];
  this.fd.append('file', this.pictureLab, this.pictureLab['name']);
}
createFormData3(event){
  this.pictureExamQ = <File>event.target.files[0];
  this.fd.append('file', this.pictureExamQ, this.pictureExamQ['name']);
}
createFormData4(event){
  this.pictureExcercises = <File>event.target.files[0];
  this.fd.append('file', this.pictureExcercises, this.pictureExcercises['name']);
}

upload(){
  this.fd.append('username',this.username);
  this.subjectService.upload(this.fd);
  this.ngOnInit();
}

attachPicturesExcercises(){
  this.upload();
  this.subjectService.attachPicturesExcercises(this.pictureExcercises['name'], this.oldSubjectCode).subscribe((ob)=>{
    if(ob['poruka']=="OK"){
      alert("You added file successfully!");
    }
  })
}
attachPicturesExamQ(){
  this.upload();
  this.subjectService.attachPicturesExamQ(this.pictureExamQ['name'], this.oldSubjectCode).subscribe((ob)=>{
    if(ob['poruka']=="OK"){
      alert("You added file successfully!");
    }
  })

}
attachPicturesLaboratory(){
  this.upload();
  this.subjectService.attachPicturesLaboratory(this.pictureLab['name'], this.oldSubjectCode).subscribe((ob)=>{
    if(ob['poruka']=="OK"){
      alert("You added file successfully!");
    }
  })

}

attachPicturesLectures(){
  this.upload();
  this.subjectService.attachPicturesLectures(this.pictureLectures['name'], this.oldSubjectCode).subscribe((ob)=>{
    if(ob['poruka']=="OK"){
      alert("You added file successfully!");
    }
  })

}

uploadComment(){
  this.subjectService.uploadComment(this.commentLab, this.oldSubjectCode).subscribe((ob)=>{
    if(ob['poruka']=='OK'){
      alert("You added comment successfully!")
    }
  })
}


  updateSubject(){
    if(this.newNameOfSubject==null || this.newNameOfSubject=="" || this.newNameOfSubject==this.subject.name)
     this.newNameOfSubject = this.subject.name;
   if(this.newSubjectCode==null || this.newSubjectCode=="")
     this.newSubjectCode=this.subject.subjectCode;

   if(this.newTypeOfSubject==null || this.newTypeOfSubject=="" || this.newTypeOfSubject==this.subject.typeOfSubject)
     this.newTypeOfSubject=this.subject.typeOfSubject;
    if(this.newYearOfStudies==null || this.newYearOfStudies==this.subject.yearOfStudies) 
    this.newYearOfStudies=this.subject.yearOfStudies;
   if(this.newClassesFond==null || this.newClassesFond == this.subject.classesFond)
     this.newClassesFond=this.subject.classesFond;
   if(this.newGoalOfSubject==null || this.newGoalOfSubject == "" || this.newGoalOfSubject==this.subject.goalOfSubject)
     this.newGoalOfSubject = this.subject.goalOfSubject;
    if(this.newNumberOfPoints==null || this.newNumberOfPoints==this.subject.numberOfPoints) 
    this.newNumberOfPoints = this.subject.numberOfPoints;
    if(this.newOutcomeOfSubject==null ||this.newOutcomeOfSubject=="" || this.newOutcomeOfSubject==this.subject.outcomeOfSubject) 
    this.newOutcomeOfSubject = this.subject.outcomeOfSubject;
    if(this.newExcerciseTerm==null || this.newExcerciseTerm == "" || this.newExcerciseTerm==this.subject.excerciseTerm) 
    this.newExcerciseTerm = this.subject.excerciseTerm;
    if(this.newPropositions==null || this.newPropositions=="" || this.newPropositions==this.subject.propositions)
     this.newPropositions = this.subject.propositions;
   if(this.newLectureTerm==null || this.newLectureTerm=="" || this.newLectureTerm==this.subject.lectureTerm)
    this.newLectureTerm = this.subject.lectureTerm;
   if(this.newLaboratory==null || this.newLaboratory == "" || this.newLaboratory==this.subject.laboratory)
    this.newLaboratory = this.subject.laboratory;
    if(this.newSemester==null || this.newSemester==this.subject.semester) 
    this.newSemester = this.subject.semester;
    this.newMaster=this.subject.master;
    if(this.newDepartment==null || this.newDepartment==this.subject.department) 
    this.newDepartment = this.subject.department;
    if(this.newMasterCheck==true) 
    this.newMaster = 1

      this.subjectService.updateSubject(this.oldSubjectCode, this.newNameOfSubject, this.oldSubjectCode, this.newTypeOfSubject, this.newYearOfStudies, this.newClassesFond,this.newGoalOfSubject, this.newNumberOfPoints, this.newOutcomeOfSubject, this.newExcerciseTerm,this.newPropositions, this.newLectureTerm, this.newLaboratory, this.newSemester, this.newMaster, this.newDepartment).subscribe((odg)=>{
          if(odg['poruka']==-1){
            this.poruka = 'Desila se greska';
          }
          else{
            this.subjectService.getSubjectByCode(this.subject.subjectCode).subscribe((subject: SubjectModel)=>{
              this.subject = subject;
              localStorage.setItem("updatingSubject",JSON.stringify(this.subject));

            })
          }
        })
  }
}
