import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgteamService {
  agteam_url = 'https://agteam-53ecb.firebaseio.com/courses';

  constructor(private http: HttpClient) {

  }

  getCourses(){
    return this.http.get(this.agteam_url + '.json');
  }
}
