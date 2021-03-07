import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor(private router:Router) { }

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

