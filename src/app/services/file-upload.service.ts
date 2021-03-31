import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'image/jpeg'
    })
  };

  constructor() { }


}
