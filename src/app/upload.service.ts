import { Injectable } from '@angular/core';
import {HttpClient,HttpEvent,HttpErrorResponse,HttpEventType} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  server:string = "http://140.113.59.182:8080/";
  formData:FormData;
  data:string;
  constructor(private http:HttpClient) { }

  upload(formData){
    console.log(formData);
    console.log(this.http.post(this.server+"pd",formData));
    return this.http.post(this.server+"pd",formData,{responseType: 'text'})
  }
}
