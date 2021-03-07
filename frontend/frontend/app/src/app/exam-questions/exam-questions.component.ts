import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.css']
})
export class ExamQuestionsComponent implements OnInit {

  constructor(private newsService:NewsServiceService, private router:Router) { }

  ngOnInit(): void {
    this.sub = JSON.parse(localStorage.getItem('subject'));
    this.file = this.sub.eq;
    this.u = JSON.parse(localStorage.getItem("user"));
    if(this.u == null){
      this.router.navigate(['']);
    }
 //Zabrana da klikom na dugme labaratory bude izbacena iz sistema
 if(!(this.u.subjects.includes(this.sub.subjectCode)) || this.u.typeOf!="Student")
 {
   
   this.router.navigate(['']);

 }

    
    if(localStorage.getItem("user")!=null)
    this.flagButton = 1;
    if(this.u.typeOf!="Student")
    {
      this.router.navigate(['/']);

    }

    
      if(this.file!=null){
      console.log(this.file)
      this.newsService.getImage(this.file).subscribe((blob : any) => {  
        let objectURL = URL.createObjectURL(blob);       
        this.sub.urleq = objectURL;
        console.log(objectURL);
        
      });
    }
  


  }
  download(url){
    window.open(url);
  }
  file:string;
  flagButton:number;
  u:User;
  sub:SubjectModel;
  route(){
    this.router.navigate(['infoSubject'])
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
    
  }
}
