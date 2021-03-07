import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  
  upload(fd){
    this.http.post(`${this.uri}/upload`,fd).subscribe(result=>{
      console.log(result);
    })
  }

  getImage(image: string): Observable<Blob> {
    return this.http.get('http://localhost:4000/getFile/'+image, { responseType: 'blob' });
  }

  attachPicturesLectures(picture, subjectCode){
    const data={
      picture:picture,
      subjectCode:subjectCode
    }
    return this.http.post(`${this.uri}/attachPicturesLectures`,data);
  }

  attachPicturesExcercises(picture, subjectCode){
    const data={
      picture:picture,
      subjectCode:subjectCode
    }
    return this.http.post(`${this.uri}/attachPicturesExcercises`,data);
  }
  attachPicturesLaboratory(picture, subjectCode){
    const data={
      picture:picture,
      subjectCode:subjectCode
    }
    return this.http.post(`${this.uri}/attachPicturesLaboratory`,data);
  }
  attachPicturesExamQ(picture, subjectCode){
    const data={
      picture:picture,
      subjectCode:subjectCode
    }
    return this.http.post(`${this.uri}/attachPicturesExamQ`,data);
  }

  uploadComment(comment, subjectCode){
    const data={
      comment:comment,
      subjectCode:subjectCode
    }
    return this.http.post(`${this.uri}/uploadComment`,data);
  }

  get1SemSub(){
    return this.http.get(`${this.uri}/get1SemesterSub`);
    
  }
  get2SemSub(){
    return this.http.get(`${this.uri}/get2SemesterSub`);
    
  }
  get3SemSub(){
    return this.http.get(`${this.uri}/get3SemesterSub`);
    
  } 
  get4SemSub(){
    return this.http.get(`${this.uri}/get4SemesterSub`);
    
  } 
  get5SemSub(){
    return this.http.get(`${this.uri}/get5SemesterSub`);
    
  } 
  get6SemSub(){
    return this.http.get(`${this.uri}/get6SemesterSub`);
    
  } 
  get7SemSub(){
    return this.http.get(`${this.uri}/get7SemesterSub`);
    
  }
  get8SemSub(){
    return this.http.get(`${this.uri}/get8SemesterSub`);
    
  }

  get1SemSi(){
    return this.http.get(`${this.uri}/get1SemesterSi`);
  }
  get2SemSi(){
    return this.http.get(`${this.uri}/get2SemesterSi`);
  }
  get3SemSi(){
    return this.http.get(`${this.uri}/get3SemesterSi`);
  }
  get4SemSi(){
    return this.http.get(`${this.uri}/get4SemesterSi`);
  }
  get5SemSi(){
    return this.http.get(`${this.uri}/get5SemesterSi`);
  }
  get6SemSi(){
    return this.http.get(`${this.uri}/get6SemesterSi`);
  }
  get7SemSi(){
    return this.http.get(`${this.uri}/get7SemesterSi`);
  }
  get8SemSi(){
    return this.http.get(`${this.uri}/get8SemesterSi`);
  }

  get1SemElse(){
    return this.http.get(`${this.uri}/get1SemesterElse`);
  }
  get2SemElse(){
    return this.http.get(`${this.uri}/get2SemesterElse`);
  }
  get3SemElse(){
    return this.http.get(`${this.uri}/get3SemesterElse`);
  }
  get4SemElse(){
    return this.http.get(`${this.uri}/get4SemesterElse`);
  }
  get5SemElse(){
    return this.http.get(`${this.uri}/get5SemesterElse`);
  }
  get6SemElse(){
    return this.http.get(`${this.uri}/get6SemesterElse`);
  }
  get7SemElse(){
    return this.http.get(`${this.uri}/get7SemesterElse`);
  }
  get8SemElse(){
    return this.http.get(`${this.uri}/get8SemesterElse`);
  }
  getMasterSub(){
    return this.http.get(`${this.uri}/getMaster`);
  }

  getNotifications(name){ 
    const data={
      name:name
    }
    return this.http.get(`${this.uri}/getNotifications/${name}`);
  }

  getSubjectInfo(name){
    const data={
      name:name
    }
    return this.http.post(`${this.uri}/getSubjectInfo`,data);
  }

  getAllSubjects(){
    return this.http.get(`${this.uri}/getAllSubjects`);
  }

  getSubjectByCode(subjectCode){
    const data ={
      subjectCode: subjectCode
    }
    return this.http.post(`${this.uri}/getSubjectByCode`, data);
  }

  getSubjectByName(name, subjectCode){
    const data ={
      name:name,
      subjectCode: subjectCode
    }
    return this.http.post(`${this.uri}/getSubjectByName`, data);
  }

  addSubject(nameOfSubject,subjectCode,typeOfSubject,yearOfStudies, classesFond,
    numberOfPoints,goalOfSubject,outcomeOfSubject,excerciseTerm,propositions,
    lectureTerm,laboratory,semester,master, department){
      const data ={
      name:nameOfSubject,
      subjectCode:subjectCode,
      typeOfSubject:typeOfSubject,
      yearOfStudies:yearOfStudies,
      classesFond:classesFond,
      goalOfSubject:goalOfSubject,
      numberOfPoints:numberOfPoints,
      outcomeOfSubject:outcomeOfSubject,
      excerciseTerm:excerciseTerm,
      propositions:propositions,
      lectureTerm:lectureTerm,
      laboratory:laboratory,
      semester:semester,
      master:master,
      department: department
      }
      return this.http.post(`${this.uri}/addSubject`,data);
  }

  updateSubject(oldSubjectCode, newNameOfSubject,newSubjectCode,newTypeOfSubject,newYearOfStudies, newClassesFond,
    newGoalOfSubject,newNumberOfPoints,newOutcomeOfSubject,newExcerciseTerm,newPropositions,
    newLectureTerm,newLaboratory,newSemester,newMaster, newDepartment){
    const data ={
      oldSubjectCode : oldSubjectCode,
      newNameOfSubject:newNameOfSubject,
      newSubjectCode:newSubjectCode,
      newTypeOfSubject:newTypeOfSubject,
      newYearOfStudies:newYearOfStudies,
      newClassesFond:newClassesFond,
      newGoalOfSubject:newGoalOfSubject,
      newNumberOfPoints:newNumberOfPoints,
      newOutcomeOfSubject:newOutcomeOfSubject,
      newExcerciseTerm:newExcerciseTerm,
      newPropositions:newPropositions,
      newLectureTerm:newLectureTerm,
      newLaboratory:newLaboratory,
      newSemester:newSemester,
      newMaster:newMaster,
      newDepartment:newDepartment
    }
    return this.http.post(`${this.uri}/updateSubject`,data);
  }
}
