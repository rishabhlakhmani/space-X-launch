import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseURL = 'https://api.spacexdata.com/v3/launches?limit=100&launch_success=true';
  constructor(private http: HttpClient) { }

  public getAllMissions() {
    return this.http.get(this.baseURL);
  }
}
