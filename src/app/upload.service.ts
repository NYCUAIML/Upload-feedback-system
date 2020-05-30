import { Injectable } from '@angular/core';
import {HttpClient,HttpEvent,HttpErrorResponse,HttpEventType} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  server:string = "http://192.168.50.18:8080/";
  formData:FormData;
  data:string;
  constructor(private http:HttpClient) { }

  upload(formData){
    console.log(formData);
    console.log(this.http.post(this.server+"pd",formData));
    return this.http.post(this.server+"pd",formData,{responseType: 'text'})
  }

  retrain(){
    return this.http.get(this.server+"retrain",{responseType: 'text'});
  }
}
