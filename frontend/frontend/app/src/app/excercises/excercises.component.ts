import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css']
})
export class ExcercisesComponent implements OnInit {

  constructor(private newsService:NewsServiceService, private router:Router) { }

  ngOnInit(): void {
    this.sub = JSON.parse(localStorage.getItem('subject'));
    this.u = JSON.parse(localStorage.getItem("user"));

     //Zabrana da klikom na dugme labaratory bude izbacena iz sistema
     if(!(this.u.subjects.includes(this.sub.subjectCode)) || this.u.typeOf!="Student")
     {
       
       this.router.navigate(['']);
 
     }


    this.file = this.sub.v;
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
        this.sub.urlv = objectURL;
        console.log(objectURL);
        
      });
    }


  }

  download(url){
    window.open(url);
  }

  file:string;
  flagButton:number;
  sub:SubjectModel;
  u:User;
  route(){
    this.router.navigate(['infoSubject'])
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
    
  }
}
