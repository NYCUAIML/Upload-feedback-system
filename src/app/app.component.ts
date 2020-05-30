import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {UploadService} from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload';
  profiles:FormGroup;
  show: any;
  ra: any;
  constructor(private fb:FormBuilder, private fserve:UploadService){}

  ngOnInit(){
    this.profiles = this.fb.group({
      name: [''],
      profile: ['']
    });
  }
  onSelect(event){
    if (event.target.files.length > 0){
      const pro = event.target.files[0];
      this.profiles.get('profile').setValue(pro);
    }
  }
  onSubmit(data){
    console.log(data.profile);
    const formd:FormData = new FormData();
    formd.append("csv",data.profile);
    this.fserve.upload(formd).subscribe(res => {
      console.log(res);
      this.show = res;
    });
  }

  ret(){
    this.fserve.retrain().subscribe(data =>{
      console.log(data);
      this.ra = data;
    });
  }
}
