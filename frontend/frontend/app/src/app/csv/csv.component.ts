import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    
  }


  lines = []; //for headings
  linesR = []; // for rows
  //File upload function
  changeListener(files: FileList){
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         //File reader method
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          allTextLines = csv.split(/\r|\n|\r/);
         
         //Table Headings
          let headers = allTextLines[0].split(',');
          let data = headers;
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          //Pushes headings to array variable
          this.lines.push(tarr);
         
          // Table Rows
          let tarrR = [];
          
          let arrl = allTextLines.length;
          let rows = [];
          for(let i = 1; i < arrl; i++){
          rows.push(allTextLines[i].split(','));
          console.log(allTextLines[i].split(','));
          let splitted = allTextLines[i].split(',');
          // this.userService.register(splitted[0] )
         
          }
 
          console.log(rows[1]);
          
          for (let j = 0; j < arrl; j++) {
            if(rows[j]!=null){
              tarrR.push(rows[j]);
            }
          }
         //Pushes rows to array variable
          this.linesR.push(tarrR);
          console.log(this.linesR);
      }
    }
  }


 

  readCSV(files: FileList){
    if(files && files.length > 0) {
      let file : File = files.item(0);
      let fileReader: FileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = (e) => {
        let csv: any = fileReader.result;
        let fileLines = [];
        fileLines = csv.split(/\r|\n|\r/);

        // User data
        let user = [];
        let typeOf = "Student";
        let status = "Active";

        for(let i = 1; i < fileLines.length; i++){
          if(fileLines[i] != ""){
            user = fileLines[i].split(',');
            console.log(user)
            if(user[7] == "TRUE"){
              status = "Active";
            }
            else{
              status  = "Inactive";
            }

           
              let username = user[0];
              let password = user[1];
              let name = user[2];
              let surname = user[3];
              let index = user[4];
              let studiesType = user[6];
              let newTypeOf = typeOf;
              let newStatus = status;
              let subjects = [];
            

            this.userService.registerStudent(username, password, index, studiesType,name, surname,newStatus).subscribe(unique => {});

          }
        }
      }
    }
  }
  
logout(){
  localStorage.clear();
  this.router.navigate(['']);
}
}
