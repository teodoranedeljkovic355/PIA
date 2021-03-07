import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../model/categoryModel';
import { Notices } from '../model/noticesModel';
import { User } from '../model/userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-category-notice-change',
  templateUrl: './category-notice-change.component.html',
  styleUrls: ['./category-notice-change.component.css']
})
export class CategoryNoticeChangeComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem("user"));
    if(this.u.username!='admin'){
      this.router.navigate(['']);
    }
    if(localStorage.getItem("updatingNotice")!=null || localStorage.getItem("updatingNotice")!=undefined){
    this.updatingNotice = JSON.parse(localStorage.getItem("updatingNotice"));
    this.findUpdatingNotice();
    this.getAllCats();
  }

    if(localStorage.getItem("category")!=null || localStorage.getItem("category")!=undefined){
    this.c = JSON.parse(localStorage.getItem("category"));
    this.findUpdatingNotice();}
  }

c:Category;
newCategory:String;
u:User;
updatingNotice:Notices;
notice: Notices;
newNoticesText: string;
newTypeOf: string;
cats:Category[];

changeCategory(){
this.userService.updateCategory(this.c.typeOf, this.newCategory).subscribe((odg)=>{
  if(odg['por']!="ok")
  {
    console.log("Error")
    
  } else{
    alert("You successfully changed your category!");
      localStorage.setItem("category", JSON.stringify(this.newCategory));
      
      this.router.navigate(['']);
  }
})
}

findUpdatingNotice(){
  this.userService.getUpdatingNotice(this.updatingNotice.typeOf, this.updatingNotice.noticesText).subscribe((notice:Notices)=>{
    if(notice){
      this.notice = notice;
    }
  })
}
getAllCats(){
  this.userService.getAllCategories().subscribe((cats:Category[])=>{
    
      this.cats = cats;
      console.log(this.cats)
    
  })
}
logout(){
  localStorage.clear();
  this.router.navigate(['']);
}

goBack(){
  this.router.navigate(['']);
}


changeNotice(){
if(this.newTypeOf == "" || this.newTypeOf==null || this.newTypeOf == this.updatingNotice.typeOf){
  this.newTypeOf = this.updatingNotice.typeOf;
}
if(this.newNoticesText == "" || this.newNoticesText==null || this.newNoticesText == this.updatingNotice.noticesText){
  this.newNoticesText = this.updatingNotice.noticesText;
}
this.userService.updateNotice(this.updatingNotice.typeOf, this.updatingNotice.noticesText, this.newTypeOf, this.newNoticesText).subscribe((odg)=>{
  if(odg['poruka']==-1)
  alert("Error happened");
  else{
    this.userService.getUpdatingNotice(this.newTypeOf, this.newNoticesText).subscribe((notice:Notices)=>{
      this.updatingNotice = notice;
      localStorage.setItem("updatingNotice", JSON.stringify(this.updatingNotice));
    })
  }
})
}
}
