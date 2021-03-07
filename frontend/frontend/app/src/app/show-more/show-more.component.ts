import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employeeModel';
import { User } from '../model/userModel';
import { UserService } from '../user.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {


  constructor(private ruter:Router, private userService:UserService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
   this.staff = JSON.parse(localStorage.getItem('staff')); 
   this.getPicture(this.staff);
  }

  staff: User;
  imageUrl: SafeUrl;

  getPicture(staff){

    this.userService.getImage(this.staff.picture)
          .subscribe((blob : any) => {  
            let objectURL = URL.createObjectURL(blob);       
            
            console.log(objectURL);
            this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            console.log(this.imageUrl);
          });
  }
  goBack(){
    this.ruter.navigate(['staff'])
  }
      
}
