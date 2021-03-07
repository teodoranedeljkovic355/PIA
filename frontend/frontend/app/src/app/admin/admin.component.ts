import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Category } from '../model/categoryModel';
import { Notices } from '../model/noticesModel';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { SubjectsService } from '../subjects.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService:UserService, private ruter:Router, private subjectService:SubjectsService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    if(this.user==null || this.user.username!= 'admin' || this.user.password!='admin')
    {
      this.ruter.navigate(['']);
      localStorage.clear();
    }

    this.usernameWelcome = this.user.username;
    this.getAllNotices();
    this.getAllCategories();
    this.getAllEmployees();
    this.getAllStudents();
    this.getAllSubjects();
    this.userService.getAllCategories().subscribe((categories:Category[])=>{
      this.allCategories = categories;
    })
    this.userService.getAllStaff().subscribe((employees: User[])=>{
      this.employees=employees;
    })
    this.userService.getAllStudents().subscribe((students:User[])=>{
      this.students = students;
    })
    this.subjectService.getAllSubjects().subscribe((subjects:SubjectModel[])=>{
      this.subjects = subjects;
    })
    this.dateS = new Date();
  this.date = this.dateS.toISOString();
  }
  
  usernameWelcome: string;

  //Employee
    username: string;
    password: string;
    name: string;
    surname: string;
    adress: string;
    mobilePhone: string;
    website:string;
    personalData: string;
    profession: string;
    roomNumber: string;
    status: string;
    picture: File;
    numOfLogin: number;
    employeeFlag: number;

    //Student
    usernameS: string;
    passwordS: string;
    index: string;
    studiesType:string;
    nameS: string;
    surnameS: string;
    statusS: string;
    numOfLoginS: number;
    employeeFlagS: number;


    //Subjects
    nameOfSubject:string;
    subjectCode: string;
    typeOfSubject: string;
    yearOfStudies: string;
    classesFond:number;
    numberOfPoints:number;
    goalOfSubject: string;
    outcomeOfSubject: string;
    lectureTerm: string;
    excerciseTerm: string;
    propositions: string;
    laboratory: string;
    semester: string;
    department:string;
    master:number;
    masterS: boolean;

    

    //Notices
    newCategory:string;
    allCategories: Category[];
    chosenCategory:string;
    allNotices: Notices[];
    noticesText:string;
    dateS: Date;
    date:string;

    //Rest
    user:User;
    students: User [];
    subjects:SubjectModel[];
    subjectsString: Array<String>;
    employees:User[];
    chosenStudent: string;
    chosenSubjects: SubjectModel[];


fd = new FormData();

createFormData(event){
  this.picture = <File>event.target.files[0];
  this.fd.append('file', this.picture, this.picture['name']);
}

upload(){
  this.fd.append('username',this.username);
  this.userService.upload(this.fd);
}

registerEmployee(){
  if(this.username!=null && this.password!=null && this.name!=null && this.surname!=null &&
     this.adress!=null && this.profession!=null && this.roomNumber!=null && this.status!=null){
  if(this.picture!=null){
    this.upload();
  this.userService.registerEmployee(this.username, this.password, this.name,
    this.surname, this.adress, this.mobilePhone, this.website, this.personalData,
    this.profession, this.roomNumber, this.status, this.picture['name']).subscribe(ob=>{
      if(ob['user']=='ok'){
        alert("Employee added");
        this.upload();
        this.userService.getAllStaff().subscribe((employees: User[])=>{
          this.employees=employees;
        })
      }
    })} else {this.userService.registerEmployee(this.username, this.password, this.name,
      this.surname, this.adress, this.mobilePhone, this.website, this.personalData,
      this.profession, this.roomNumber, this.status, null).subscribe(ob=>{
        if(ob['user']=='ok'){
          alert("Employee added");
          this.upload();
          this.userService.getAllStaff().subscribe((employees: User[])=>{
            this.employees=employees;
          })
        }
      })
    }
  }else{
    alert("You must fill in required fields.")
  }
}

registerStudent(){
  if(this.usernameS!=null && this.passwordS!=null && this.nameS!=null && this.surnameS!=null &&
    this.index!=null && this.studiesType!=null && this.statusS!=null){
  this.userService.registerStudent(this.usernameS, this.passwordS, this.index,
    this.studiesType, this.nameS, this.surnameS, this.statusS).subscribe(ob=>{
      if(ob['user']=='ok'){
        alert("Student added");
        this.userService.getAllStudents().subscribe((students: User[])=>{
          this.students=students;
        })
      }
    })
  } else{
    alert("You must fill in required fields.")
  }
}

addSubject(){
  if(this.nameOfSubject!=null && this.subjectCode!=null && this.typeOfSubject!=null && this.yearOfStudies!=null &&
    this.classesFond!=null && this.numberOfPoints!=null && this.goalOfSubject!=null && this.outcomeOfSubject && 
    this.excerciseTerm!=null && this.lectureTerm!=null && this.propositions!=null && this.laboratory!=null && this.semester!=null &&
    this.department!=null)
    {
      if(this.masterS==true) this.master=1; else this.master=0;
    this.subjectService.addSubject(this.nameOfSubject, this.subjectCode, this.typeOfSubject, this.yearOfStudies,
    this.classesFond, this.numberOfPoints, this.goalOfSubject, this.outcomeOfSubject, this.excerciseTerm,
    this.propositions, this.lectureTerm, this.laboratory, this.semester, this.master, this.department).subscribe(ob=>{
      if(ob['subject']=='ok'){
        alert("Subject added");
        this.subjectService.getAllSubjects().subscribe((subjects:SubjectModel[])=>{
          this.subjects = subjects;
        })
      }
      
    })
  } else{
    alert("You must fill in required fields.")
  }
  this.subjectService.getAllSubjects().subscribe((subjects:SubjectModel[])=>{
    this.subjects = subjects;})
}

logout(){
  localStorage.clear();
  this.ruter.navigate(['/']);
}

getAllEmployees(){
  this.userService.getAllStaff().subscribe((employees: User[])=>{
    this.employees = employees;
  })
}

getAllSubjects(){
  this.subjectService.getAllSubjects().subscribe((subjects: SubjectModel[])=>{
    this.subjects = subjects;
  })
}

getAllStudents(){
  this.userService.getAllStudents().subscribe((students:User[])=>{
    this.students=students;
  })
}

updateEmployee(e){
localStorage.setItem("updatingUser", JSON.stringify(e));
this.ruter.navigate(['updateEmployee']);
}

deleteEmployee(e){
  this.userService.deleteEmployee(e.username).subscribe((odg)=>{
    if(odg['poruka']!='ok'){
      alert("Desila se greska")
    } else{
      this.userService.getAllStaff().subscribe((employees: User[])=>{
        this.employees=employees;
      })
    }
  })
  
 
}

updateSubject(e){
  localStorage.setItem("updatingSubject", JSON.stringify(e));
  this.ruter.navigate(['updateSubject']);
  }
  
  deleteSubject(e){
    this.userService.deleteSubject(e.subjectCode).subscribe((odg)=>{
      if(odg['poruka']!='ok'){
        alert("Desila se greska")
      } else{
        
    this.subjectService.getAllSubjects().subscribe((subjects:SubjectModel[])=>{
      this.subjects = subjects;
    })
      }
    })
  }


updateStudent(s){
  localStorage.setItem("updatingStudent", JSON.stringify(s));
  this.ruter.navigate(['updateStudent']);
  }
  
  deleteStudent(s){
    this.userService.deleteStudent(s.username).subscribe((odg)=>{
      if(odg['poruka']!='ok'){
        alert("Desila se greska")
      } else{
        this.userService.getAllStudents().subscribe((students:User[])=>{
          this.students = students;
        })
      }
    })
    
  }
  addStudentToSubjects(){
    console.log(this.chosenStudent)
    this.userService.addStudentToSubjects(this.chosenStudent, this.chosenSubjects).subscribe((odg)=>{
      if(odg['poruka']!='OK'){
        alert("Desila se greska")
      } else{
        alert("You successfully added student!")
        this.userService.getAllStudents().subscribe((students: User[])=>{
          this.students=students;
        })
      }
    })
  }
  getCSV(){
    this.ruter.navigate(['csv']);
  }

  getAllCategories(){
    this.userService.getAllCategories().subscribe((categories:Category[])=>{
      this.allCategories = categories;
    })
  }

  addNewCategory(){
    this.userService.addNewCategory(this.newCategory).subscribe(ob=>{
      if(ob['category']=='ok'){
        alert("Category is added!");
        this.userService.getAllCategories().subscribe((categories:Category[])=>{
          this.allCategories = categories;
        })
      } else {
        alert("Category is not added!")
      }
    })
  }

  
deleteCategory(c){
  this.userService.deleteCategory(c.typeOf).subscribe((odg)=>{
    if(odg['poruka']!='ok'){
      alert("Error happened!")
    } else{
      this.userService.getAllCategories().subscribe((categories: Category[])=>{
        this.allCategories=categories;
      })
    }
  })
    
}
getAllNotices(){
this.userService.getAllNotices().subscribe((notices:Notices[])=>{
  this.allNotices = notices;
})
}

updateCategory(c){
  localStorage.setItem("category",JSON.stringify(c));
  this.ruter.navigate(['changeCategory']);
}

addNewNotice(){
  this.userService.addNewNotice(this.chosenCategory,this.noticesText, this.date).subscribe(ob=>{
    if(ob['notice']=='ok'){
      alert("Notice is added!");
      this.userService.getAllNotices().subscribe((notices:Notices[])=>{
        this.allNotices = notices;
      })
    } else {
      alert("Notice is not added!")
    }
  })
}

updateNotice(n){
  localStorage.setItem("updatingNotice",JSON.stringify(n));
  this.ruter.navigate(['changeCategory']);
}

deleteNotice(n){
  this.userService.deleteNotice(n.typeOf, n.noticesText).subscribe((odg)=>{
    if(odg['poruka']!='ok'){
      alert("Error happened!")
    } else{
      this.userService.getAllNotices().subscribe((notices: Notices[])=>{
        this.allNotices=notices;
      })
    }
  })
}
}