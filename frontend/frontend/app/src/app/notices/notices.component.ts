import { Component, OnInit } from '@angular/core';
import { Notices } from '../model/noticesModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllNotices30Days().subscribe((notices:Notices[])=>{
      this.notices = notices;
      console.log(notices)
    })
  }
  notices:Notices[];
}
