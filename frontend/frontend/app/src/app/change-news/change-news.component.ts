import { JSDocTagName, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { notificationModel } from '../model/notificationModel';
import { User } from '../model/userModel';
import { NewsServiceService } from '../news-service.service';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-change-news',
  templateUrl: './change-news.component.html',
  styleUrls: ['./change-news.component.css']
})
export class ChangeNewsComponent implements OnInit {

  constructor(private router:Router, private newsService: NewsServiceService) { }

  ngOnInit(): void {
    
  this.n = JSON.parse(localStorage.getItem("news"));
  this.u = JSON.parse(localStorage.getItem("user"));
    if(this.u == null || this.u.typeOf!="Employee"){
      this.router.navigate(['']);
      localStorage.clear();
    }

  this.i = 0;
  this.t = this.n.title;
  this.username = this.u.username;
  this.subs= this.u.subjects;
this.oldTitle = this.n.title;
  this.newsService.findNewsUpdated(this.t).subscribe((news:notificationModel)=>{
    this.n = news;
  })
  this.changeNewsData();

  }
 n:notificationModel;
 u: User;
 username: string;
 oid: string;
 subs: Array<Object>;
 newTitle: string;
 t: string;
 newText: string;
 picture:File;
 newSubjects: Array<Object>;
 newPicture: File;
 poruka:string;
 i: number;
 id:string;
 oldTitle:string;

 changeNewsData(){
   if(this.newTitle== null || this.newTitle == "" || this.newTitle == this.n.title)
   this.newTitle = this.n.title;
   
  //  if(this.newPicture == null || this.newPicture == this.n.picture)
  //  this.newPicture = this.n.picture;

   if(this.newText == null || this.newText == "" || this.newText== this.n.text)
   this.newText = this.n.text;
   
   if(this.newSubjects == null || this.newSubjects == this.n.subjects)
   this.newSubjects = this.n.subjects;

   this.newsService.changeNewsData(this.oldTitle,this.newTitle, this.newText, this.newSubjects).subscribe((odg)=>{
     if(odg['poruka']==-1)
     this.poruka = "Desila se greska";
     else{
       this.newsService.findNewsUpdated(this.newTitle).subscribe((news:notificationModel)=>{
         this.n = news;
         localStorage.setItem("news", JSON.stringify(this.n));
       })
     }
     this.oldTitle = this.newTitle;
   })
 }


fd = new FormData();

 createFormData(event){
   this.newPicture = <File>event.target.files[0];
   this.fd.append('file', this.newPicture, this.newPicture['name']);
 }
 
 upload(){
   this.fd.append('username',this.username);
   this.newsService.upload(this.fd);
 }

 changePicture(){
  this.upload();
  this.newsService.changePicture(this.newPicture['name'], this.n.title).subscribe((ob)=>{
    if(ob['poruka']=="OK"){
      alert("sve OK");
      
    }
  })
}

logout(){
  localStorage.clear();
  this.router.navigate(['']);
}
route(){
  this.router.navigate(['user']);
}
route1(){
  this.router.navigate(['user/userProfile']);
}
route2(){
  this.router.navigate(['user/profSubjects']);
}
route3(){
  this.router.navigate(['user/news']);
}

}
