import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) { }
  uri = 'http://localhost:4000'


  login(username, password, typeOf){
    const data= {
      username: username,
      password: password,
      typeOf: typeOf
    }

    return this.http.post(`${this.uri}/login`, data);
  }
  
  register(usernameS, passwordS, index,
    studiesType, nameS, surnameS, statusS){
      const data={
        username:usernameS,
        password:passwordS,
        index: index,
        studiesType:studiesType,
        name:nameS,
        surname:surnameS,
        status:statusS,
        numOfLogin: 0,
        employeeFlag: 0,
        typeOf: "Student"
      }

    return this.http.post(`${this.uri}/register`, data);
  }

  registerStudent(usernameS, passwordS, index,
    studiesType, nameS, surnameS, statusS){
      const data={
        username:usernameS,
        password:passwordS,
        index: index,
        studiesType:studiesType,
        name:nameS,
        surname:surnameS,
        status:statusS,
        numOfLogin: 0,
        employeeFlag: 0,
        typeOf: "Student"
      }

      return this.http.post(`${this.uri}/registerStudent`,data);
    }

    registerEmployee(username, password, name,
      surname, adress, mobilePhone, website, personalData,
      profession, roomNumber, status, picture){
        const data={
        username:username,
        password: password,
        name: name,
        surname: surname,
        adress: adress,
        mobilePhone: mobilePhone,
        website: website,
        personalData: personalData,
        profession: profession,
        roomNumber: roomNumber,
        status: status,
        picture:picture,
        numOfLogin: 0,
        employeeFlag: 1,
        typeOf: "Employee"
        }

        return this.http.post(`${this.uri}/registerEmployee`,data);
      }
      

      oldPass(kor_ime,jedan){
        const data={
          kor_ime:kor_ime
        }
        if(jedan==1){
          console.log('1');
          return this.http.post(`${this.uri}/change`,data);
          
        }
        return this.http.post(`${this.uri}/getpass`,data);
      }

      change(kor_ime, pass){
        const data={
          username:kor_ime,
          newPass:pass
        }
        console.log(kor_ime);
        console.log(pass);
        return this.http.post(`${this.uri}/change`,data);
      }

      getAllStaff(){
        return this.http.get(`${this.uri}/getAllStaff`);
      }

      getAllStudents(){
        return this.http.get(`${this.uri}/getAllStudents`);
      }

      upload(fd){
        this.http.post(`${this.uri}/upload`,fd).subscribe(result=>{
          console.log(result);
        })
      }

      getImage(image: string): Observable<Blob> {
        return this.http.get('http://localhost:4000/getProfilePicture/'+image, { responseType: 'blob' });
      }
      
      updateInfo(newAdress,username){
        const data={
          
          newAdress:newAdress,
          
          username: username
        }
        console.log(newAdress)
        return this.http.post(`${this.uri}/updateInfo`,data);
      }

      addStudentToSubjects(chosenStudent, chosenSubjects){
        const data={
          chosenSubjects: chosenSubjects,
          chosenStudent: chosenStudent
        }
        return this.http.post(`${this.uri}/addStudentToSubjects`,data);
      }

      updateMobile(newMobile,username){
        const data={
          
          newMobile:newMobile,
          
          username: username
        }
        console.log(newMobile)
        return this.http.post(`${this.uri}/updateMobile`,data);
      }

      updatePersonalData(newPersonalData,username){
        const data={
          
          newPersonalData:newPersonalData,
          
          username: username
        }
        
        return this.http.post(`${this.uri}/updatePersonalData`,data);
      }

      updateRoomNumber(newRoomNumber,username){
        const data={
          
          newRoomNumber:newRoomNumber,
          
          username: username
        }
        
        return this.http.post(`${this.uri}/updateRoomNumber`,data);
      }

      updateStudent(oldUsernameS, newUsernameS, newNameS, newSurnameS, newPasswordS, newIndexS, newStatusS, newStudiesTypeS){
        const data={
          oldUsernameS:oldUsernameS,
          newUsernameS:newUsernameS,
          newNameS:newNameS,
          newSurnameS:newSurnameS,
          newPasswordS:newPasswordS,
          newIndexS: newIndexS,
          newStatusS: newStatusS,
          newStudiesTypeS: newStudiesTypeS,
        }
        return this.http.post(`${this.uri}/updateStudent`,data);
      }

      updateEmployee(oldUsername, newUsername, newName, newSurname, newPassword, newMobile, newWebsite, newPersonalData, newAdress, newRoomNumber, newProfession, newStatus, newSubjects){
        const data={
          oldUsername:oldUsername,
          newUsername:newUsername,
          newName:newName,
          newSurname:newSurname,
          newPassword:newPassword,
          newMobile: newMobile,
          newWebsite: newWebsite,
          newPersonalData:newPersonalData,
          newAdress:newAdress,
          newRoomNumber:newRoomNumber,
          newProfession:newProfession,
          newStatus: newStatus,
          newSubjects: newSubjects
          
        }
        return this.http.post(`${this.uri}/updateEmployee`,data);
      }

      changeUserData(username,newAdress, newMobile, newPersonalData, newRoomNumber){
        const data={
          username:username,
          newAdress:newAdress,
          newMobile:newMobile,
          newPersonalData:newPersonalData,
          newRoomNumber:newRoomNumber
        }
        return this.http.post(`${this.uri}/changeUserData`,data);
      }


      findOneUpdated(username){
        const data= {
          username: username,
          
        }
    
        return this.http.post(`${this.uri}/findOneUpdated`, data);
      }

      findEmployee(u){
        const data= {
          username: u.username
        }
        return this.http.post(`${this.uri}/updateEmployee`, data);
      }

      changeUsername(newUsername, username){
        const data={
          newUsername:newUsername,
          username:username
        }
        return this.http.post(`${this.uri}/changeUsername`,data);
      }

      changePassword(newPassword, password, username){
        const data={
          newPassword:newPassword,
          password:password,
          username:username
        }
        return this.http.post(`${this.uri}/changePassword`,data);
      }

      changeName(newName, name, username){
        const data={
          newName:newName,
          name:name,
          username:username
        }
        return this.http.post(`${this.uri}/changeName`,data);
      }

      changeSurname(newSurname, surname, username){
        const data={
          newSurname:newSurname,
          surname:surname,
          username:username
        }
        return this.http.post(`${this.uri}/changeSurname`,data);
      }

      findUsersUpdated(username){
        const data= {
          username:username
        }
        return this.http.post(`${this.uri}/findUsersUpdated`, data);
      }

      changeAdress(newAdress, adress, username){
        const data={
          newAdress:newAdress,
          adress:adress,
          username:username
        }
        return this.http.post(`${this.uri}/changeAdress`,data);
      }

      changeMobile(newMobile, mobilePhone, username){
        const data={
          newMobile:newMobile,
          mobilePhone:mobilePhone,
          username:username
        }
        return this.http.post(`${this.uri}/changeMobile`,data);
      }
      changeWebsite(newWebsite, website, username){
        const data={
          newWebsite:newWebsite,
          website:website,
          username:username
        }
        return this.http.post(`${this.uri}/changeWebsite`,data);
      }
      changePersonalData(newPersonalData, personalData, username){
        const data={
          personalData:personalData,
          newPersonalData:newPersonalData,
          username:username
        }
        return this.http.post(`${this.uri}/changePersonalData`,data);
      }

      changeProfession(newProfession, profession, username){
        const data={
          profession:profession,
          newProfession:newProfession,
          username:username
        }
        return this.http.post(`${this.uri}/changeProfession`,data);
      }

      changeRoomNumber(newRoomNumber, roomNumber, username){
        const data={
          roomNumber:roomNumber,
          newRoomNumber:newRoomNumber,
          username:username
        }
        return this.http.post(`${this.uri}/changeRoomNumber`,data);
      }

      changePicture(newPicture, username){
        console.log("AAAAAAAAA")
        console.log(newPicture)
        console.log(username)
        const data={
          picture : newPicture,
          username: username
        }
        console.log(newPicture);
        return this.http.post(`${this.uri}/changePicture`, data);
      }

      changeSubjectsForProf(newSubjects, username){
        const data={
          newSubjects : newSubjects,
          username: username
        }
        return this.http.post(`${this.uri}/changeSubjectsForProf`, data);
      }

      deleteEmployee(username){
        const data ={
          username:username
        }
        return this.http.post(`${this.uri}/deleteEmployee`,data);
      }

      deleteSubject(subjectCode){
        const data = {
          subjectCode:subjectCode
        }
        return this.http.post(`${this.uri}/deleteSubject`,data);
      }

      deleteStudent(username){
        const data = {
          username:username
        }
        return this.http.post(`${this.uri}/deleteStudent`,data);
      }

      changeIndex(newIndexS, index, username){
        const data={
          index:index,
          newIndexS:newIndexS,
          username:username
        }
        return this.http.post(`${this.uri}/changeIndex`,data);
      }

      changeStatus(newStatus, username){
        const data = {
          newStatus:newStatus,
          username:username
        }
        return this.http.post(`${this.uri}/changeStatus`,data);
      }

      changeStudiesType(newStudiesType, username){
        const data = {
          newStudiesType:newStudiesType,
          username:username
        }
        return this.http.post(`${this.uri}/changeStudiesType`,data);
      }

      //NOTICES PART

      addNewCategory(typeOf){
        const data ={
          typeOf: typeOf
        }
        return this.http.post(`${this.uri}/addNewCategory`, data);
      }

      getAllCategories(){
        return this.http.get(`${this.uri}/getAllCategories`);
      }

      deleteCategory(typeOf){
        const data ={
          typeOf:typeOf
        }
        return this.http.post(`${this.uri}/deleteCategory`,data);
      }
      updateCategory(typeOf, newCategory){
        const data  ={
          typeOf:typeOf,
          newCategory: newCategory
        }
        return this.http.post(`${this.uri}/updateCategory`,data);
      }

      addNewNotice(typeOf, noticesText, date){
        const data = {
          typeOf: typeOf,
          noticesText: noticesText,
          date: date
        }
        return this.http.post(`${this.uri}/addNewNotice`,data);
      }

      getAllNotices(){
        return this.http.get(`${this.uri}/getAllNotices`);
      }
      deleteNotice(typeOf, noticesText){
        const data = {
          typeOf:typeOf,
          noticesText: noticesText
        }
        return this.http.post(`${this.uri}/deleteNotice`,data);
      }
      getUpdatingNotice(typeOf, noticesText){
          const data = {
            typeOf: typeOf,
            noticesText: noticesText
          }
          return this.http.post(`${this.uri}/getUpdatingNotice`,data);
      }

      updateNotice(typeOf, noticesText, newTypeOf, newNoticesText){
        const data ={
          typeOf:typeOf,
          noticesText: noticesText,
          newTypeOf: newTypeOf,
          newNoticesText: newNoticesText
        }
        return this.http.post(`${this.uri}/updateNotice`, data);
      }
      getAllNotices30Days(){
        return this.http.get(`${this.uri}/getAllNotices30Days`);
      }
}
