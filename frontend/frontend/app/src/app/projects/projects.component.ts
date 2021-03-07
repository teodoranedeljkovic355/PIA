import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  
    if(localStorage.getItem("user")!=null)
    this.flagButton = 1;

  }
  flagButton:number;
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
