import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MakeupApiService {

  constructor(private http_instance: HttpClient) { }
  
  getAll(): Observable<any[]>{
    return this.http_instance.get<Profile[]>('https://makeup-api.herokuapp.com/api/v1/products.json')
  }
  
}
