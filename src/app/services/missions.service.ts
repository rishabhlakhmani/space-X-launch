import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { IFilters } from '../models/filters.interface';
import { IMission } from '../models/mission.interface';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class MissionsService {

    constructor(private httpServie: HttpService) { }

    public missionList: IMission[];
    private missionsObs$: BehaviorSubject<IMission[]> = new BehaviorSubject(null);
    private currentFilters: IFilters;

    public getMissionsObs(): Observable<IMission[]> {
        return this.missionsObs$.asObservable();
    }

    public setMissionsObs(missions: IMission[]): void {
        this.missionsObs$.next(missions);
    }

    public getAllMissions(): Observable<IMission[]> {
        return this.httpServie.getAllMissions();
    }

    public setMissionsList(allMissions: IMission[]): void {
        this.missionList = allMissions;
        this.setMissionsObs(this.missionList);
    }

    public getFilters(): IFilters {
        return this.currentFilters;
    }

    public setFilters(newFilters: IFilters): void {
        this.currentFilters = newFilters;
    }

    public applyFilters(): void {
        const filteredList = this.missionList.filter(mission => {
            return _.isMatch(mission, this.currentFilters);
        });
        this.setMissionsObs(filteredList);
    }

}
