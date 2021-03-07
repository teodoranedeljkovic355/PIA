import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Employee } from '../model/employeeModel';

import { notificationModel } from '../model/notificationModel';
import { SubjectModel } from '../model/subjectModel';
import { User } from '../model/userModel';
import { NewsServiceService } from '../news-service.service';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-info-subject',
  templateUrl: './info-subject.component.html',
  styleUrls: ['./info-subject.component.css']
})
export class InfoSubjectComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer, private newsService:NewsServiceService, private router:Router, private subjectService: SubjectsService) { }



  ngOnInit(): void {
    this.sub = JSON.parse(localStorage.getItem('subject'));
    this.u = JSON.parse(localStorage.getItem("user"));
    


    this.subjectsOfCurrUser = this.u.subjects;
    console.log("Predmeti trenutnog korisnika",this.subjectsOfCurrUser);
    console.log("Ime predmeta na kom smo i sifra", this.sub.name, this.sub.subjectCode)

    //Trazenje novosti za predmet na kom smo:
    this.subjectService.getNotifications(this.sub.subjectCode).subscribe((notifs:notificationModel[])=>{
      this.notifsOfThisSubject = notifs;
      console.log(notifs)
    })


    //Prvo nadjemo drugi predmet
    this.subjectService.getSubjectByName(this.sub.name, this.sub.subjectCode).subscribe((n:SubjectModel)=>{
      this.subjectOfSecondDpt = n;
      console.log("SUBJ DRUGI",this.subjectOfSecondDpt)
      if(this.subjectOfSecondDpt!=null){
        console.log("prosli smo")
      
      

      //Trazenje novosti za drugi predmet koji ima isto ime
    this.subjectService.getNotifications(this.subjectOfSecondDpt.subjectCode).subscribe((nfs:notificationModel[])=>{
      this.notifsofOtherSubject = nfs;
      console.log("drugi odsek",nfs)
    

    //Spajanje ta dva niza
    Array.prototype.push.apply(this.notifsofOtherSubject,this.notifsOfThisSubject); //Spajanje dva niza objekata
    console.log("Oba niza spojena",this.notifsofOtherSubject)
    this.sortByDate(this.notifsofOtherSubject);
    for(let i=0;i<this.notifsofOtherSubject.length;i++)
    {
      if(this.notifsofOtherSubject[i].picture!=null){
        console.log(this.notifsofOtherSubject[i].picture)
        this.newsService.getImage(this.notifsofOtherSubject[i].picture).subscribe((blob:any)=>{
          let objectURL = URL.createObjectURL(blob);   
          this.notifsofOtherSubject[i].url = objectURL;
        })
      }
    }






    this.newsService.findThoseFromLastWeek().subscribe((last7Days:notificationModel[])=>{
      this.last7daysNotifications = last7Days;
      console.log("last 7 days",last7Days)
      this.result = this.notifsofOtherSubject.filter(o => this.last7daysNotifications.some(({date}) => o.date === date));
      console.log("Filter",this.result)

      // this.sortByDate(this.result);
      console.log(this.last7daysNotifications);
      console.log(this.result)
      for(let noti of this.result){
        noti.flagD=1;
      }
    })

  })
} else{
  
  this.subjectService.getNotifications(this.sub.subjectCode).subscribe((notifs:notificationModel[])=>{
    this.onlyOne = notifs;
    console.log(this.onlyOne)
    console.log("ONLY ONE",this.onlyOne);
  })
  this.newsService.findThoseFromLastWeek().subscribe((last7Days:notificationModel[])=>{
    this.last7daysNotifications = last7Days;
    console.log("last 7 days",last7Days)
    this.result = this.onlyOne.filter(o => this.last7daysNotifications.some(({date}) => o.date === date));
    console.log("Filter",this.result)

    
    console.log(this.last7daysNotifications);
    console.log(this.result)
    this.sortByDate(this.result);
    for(let noti of this.result){
      noti.flagD=1;
    }
    for(let i=0;i<this.onlyOne.length;i++)
    {
      if(this.onlyOne[i].picture!=null){
        console.log(this.onlyOne[i].picture)
        this.newsService.getImage(this.onlyOne[i].picture).subscribe((blob:any)=>{
          let objectURL = URL.createObjectURL(blob);   
          this.onlyOne[i].url = objectURL;
        })
      }
    }
  })
  


}
})

    

  } onlyOne:notificationModel[];
  curr:Array<Object>;
  result:notificationModel[];
 last7daysNotifications:notificationModel[];
  notifsofOtherSubject:notificationModel[];
  subjectCodeOfOtherSubject:string;
  notifsOfThisSubject:notificationModel[];
  subjectOfSecondDpt:SubjectModel;


  imageUrl: SafeUrl;
  subjCode2:string;
  name1:string;
  subject1:SubjectModel;

  subjectsOfCurrUser: Array<Object>;
  flagZ:boolean;
  sub : SubjectModel;
  
  name: string;
  notifs1:notificationModel[];
  notifs: notificationModel[];
  u:User;
  smer:string;
  proba:notificationModel[];

route(){
  this.smer =localStorage.getItem("smer");
  if(this.smer=="SI")
  this.router.navigate(['sibsc']);
  if(this.smer=='RTI')
  this.router.navigate(['rtibsc']);
  if(this.smer=="MASTER")
  this.router.navigate(['master']);
  if(this.smer=="ELSE")
  this.router.navigate(['elsebsc']);
}
  
logout(){
  localStorage.clear();
  this.router.navigate(['']);
  
}

sortByDate(a): notificationModel[]{
  return a.sort((a,b)=>{
  if(a.date>b.date) return -1;
  else{
  if(a.date<b.date) return 1;
  else return 0;
  }
  })
  }


  download(url){
    window.open(url);
  }

  findThoseFromLastWeek(){
    this.newsService.findThoseFromLastWeek().subscribe((proba:notificationModel[])=>{
      this.proba = proba;
      console.log("proba")
      console.log(this.proba)
    })
  }
}
