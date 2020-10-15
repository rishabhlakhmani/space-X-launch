import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EFilters } from '../constants/filters.enum';
import { IFilters } from '../models/filters.interface';
import { IMission } from '../models/mission.interface';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class MissionsService {

    constructor(private httpServie: HttpService) { }

    private missionsObs$: BehaviorSubject<IMission[]> = new BehaviorSubject(null);
    private currentFilters: IFilters;

    public getMissionsObs(): Observable<IMission[]> {
        return this.missionsObs$.asObservable();
    }

    public setMissionsObs(missions: IMission[]): void {
        this.missionsObs$.next(missions);
    }

    public getAllMissions(): void {
        this.httpServie.getAllMissions().subscribe(response => {
            this.setMissionsObs(response);
        });
    }

    public getFilters(): IFilters {
        return this.currentFilters;
    }

    public setFilters(newFilters: IFilters): void {
        this.currentFilters = newFilters;
    }

    public updateMissionList(filterType: string, filterValue: string): void {
        switch (filterType) {
            case EFilters.LaunchYear: break;
            case EFilters.SuccefulLanding: break;
            case EFilters.SuccessfulLaunch: break;
        }
    }

}
