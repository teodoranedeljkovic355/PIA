import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { notificationModel } from '../model/notificationModel';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsServiceService, private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user.typeOf!="Employee")
    {
      localStorage.clear();
      this.router.navigate(['']);
    }
    this.subs = this.user.subjects;
    console.log(this.username)
    this.username = this.user.username;
    this.dateS = new Date();
    this.date = this.dateS.toISOString();
    
    this.names = new Array();
    for(var i in this.subs){
      let n = this.subs[i].valueOf();
     let nn =Object.values(this.subs[i]);
      this.names.push(nn.toString());
    }
    this.myNews = new Array();
    this.getMyNews();
  }

  user:User;
  subjects:Array<String>;
  subs:Array<Object>;
  title: string;
  text: string;
  picture: File;
  username:string;
  poruka: string;
  dateS: Date;
  date:string;
  names: Array<String>;
  myNews: notificationModel[];
  n: Object;
  nn:string;
  file:string;


  fd = new FormData();

createFormData(event){
  this.picture = <File>event.target.files[0];
  this.fd.append('file', this.picture, this.picture['name']);
}

createFormDataArray(event) {
  let cnt=<File>event.target.files.length as unknown;
  for(let i=0;i<cnt;i++){
    this.picture=null;
    this.fd=new FormData();


    // if(i==0){this.addNews()}
    // else{

    // }

    this.picture = <File>event.target.files[i];
    this.fd.append('file', this.picture, this.picture['name']);    
    this.newsService.upload(this.fd);
  }
}



upload(){
  this.fd.append('username',this.username);
  this.newsService.upload(this.fd);
}
addNews(){
  if(this.title!=null && this.text!=null && this.subjects!=null){
    if(this.picture==null){
      this.file = null;
    } else this.file = this.picture['name'];

  this.newsService.addNews(this.title, this.text,this.subjects, this.date, this.file, this.username).subscribe((resp)=>{
    if(resp['notification']!="ok"){
      this.poruka='error';
      
    }
    else{
      alert("You added news successfully!");
      for(let i=0;i<this.subs.length;i++){
        this.nn = this.subs[i].toString();
        this.newsService.getNewsBySubjectName(this.nn).subscribe((notifications:notificationModel[])=>{
          let trenArray = [];
        trenArray = notifications;
        trenArray.forEach(element => {
          if((this.myNews.find(item=>item.title === element.title))===undefined)
          this.myNews.push(element);
        });
        
        console.log("my news:")
        console.log(this.myNews);
        console.log("notifications")
        console.log(notifications);
        })
      }
      this.upload();
      this.poruka = 'error';
    }
  })
} else {
  alert("You must fill in whole form!")
}
}



getMyNews(){
  for(let i=0;i<this.subs.length;i++){
    this.nn = this.subs[i].toString();
    this.newsService.getNewsBySubjectName(this.nn).subscribe((notifications:notificationModel[])=>{
      let trenArray = [];
    trenArray = notifications;
    trenArray.forEach(element => {
      if((this.myNews.find(item=>item.title === element.title))===undefined)
      this.myNews.push(element);
    });
    
    console.log("my news:")
    console.log(this.myNews);
    console.log("notifications")
    console.log(notifications);
    })
  }
}


deleteMyNews(news){
  this.newsService.deleteMyNews(news).subscribe((res)=>{
    if(res['poruka']!="ok") alert("Error");
    else{      
      this.myNews.forEach( (item, index) => {​​​​​
        if(item.title === news.title) this.myNews.splice(index,1);
      }​​​​​);​​​​​

      this.upload();
      this.poruka = 'error';
    }
  })
}

update(news){
  localStorage.setItem("news",JSON.stringify(news));
  this.router.navigate(['/user/news/changeNews']);
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