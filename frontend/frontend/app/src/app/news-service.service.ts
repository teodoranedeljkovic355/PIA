import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  upload(fd){
    this.http.post(`${this.uri}/upload`,fd).subscribe(result=>{
      console.log(result);
    })
  }

  getImage(image: string): Observable<Blob> {
    return this.http.get('http://localhost:4000/getFile/'+image, { responseType: 'blob' });
  }

  addNews(title, text,subjects, date, file, username){
    const data={
      title:title,
      text:text,
      subjects:subjects,
      date:date,
      picture:file,
      username:username
    }
    return this.http.post(`${this.uri}/addNews`, data);
  }

  addNewsWithMoreFiles(title,restFiles){
    const data = {
      title:title,
      restFiles:restFiles
    }
    return this.http.post(`${this.uri}/addNewsWithMoreFiles`,data);
  }

  changePicture(newPicture, title){
    console.log("AAAAAAAAA")
    console.log(newPicture)
    console.log(title)
    const data={
      picture : newPicture,
      title: title
    }
    console.log(newPicture);
    return this.http.post(`${this.uri}/changePictureNews`, data);
  }

  changeNewsData(oldTitle,newTitle, newText, newSubjects){
    const data={
      oldTitle:oldTitle,
      newTitle:newTitle,
      newText:newText,
      newSubjects:newSubjects
    }
    return this.http.post(`${this.uri}/changeNewsData`,data);
  }

  getNewsBySubjectName(nn){
    const data={
      nn:nn
    }
    return this.http.get(`${this.uri}/getNewsBySubjectName/${nn}`);
  }
  

deleteMyNews(news){
const data={
  news:news
}
return this.http.post(`${this.uri}/deleteMyNews`, data);
}

changeSubjects(newSubjects, title){
  const data={
    newSubjects : newSubjects,
    title: title
  }
  return this.http.post(`${this.uri}/changeSubjects`, data);
}

changeFile(newPicture, title){
  const data={
    picture : newPicture,
    title: title
  }
  console.log(newPicture);
  return this.http.post(`${this.uri}/changeFile`, data);
}

findThoseFromLastWeek(){
 
  return this.http.get(`${this.uri}/findThoseFromLastWeek/`);
}


changeText(newText, title){
  const data={
    newText : newText,
    title: title
  }
  return this.http.post(`${this.uri}/changeText`, data);
}

changeTitle(newTitle,title){
  const data={
    
    newTitle:newTitle,
    
    title: title
  }
  console.log(newTitle)
  return this.http.post(`${this.uri}/changeTitle`,data);
}


findNewsUpdated(title){
  const data= {
    title: title,
  }

  return this.http.post(`${this.uri}/findNewsUpdated`, data);
}




}
