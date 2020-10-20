import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { responseMapper } from '../mappers/api-response.mappers';
import { IMission } from '../models/mission.interface';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    public baseURL = 'https://api.spacexdata.com/v3/launches?limit=100';
    constructor(private http: HttpClient) { }

    public getAllMissions(): Observable<IMission[]> {
        return this.http.get(this.baseURL).pipe(map(responseMapper));
    }
}
