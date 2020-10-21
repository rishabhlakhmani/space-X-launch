import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import { IFilters } from '../models/filters.interface';
import { IMission } from '../models/mission.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class MissionsService {
  constructor(private httpServie: HttpService) {}

  private missionsObs$: Subject<IMission[]> = new Subject();
  private filetrObs$: BehaviorSubject<IFilters> = new BehaviorSubject(null);
  private missionList: IMission[];
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

  public getMissionList(): IMission[] {
    return this.missionList;
  }

  public setMissionsList(allMissions: IMission[]): void {
    this.missionList = allMissions;
  }

  public getFiltersObs(): Observable<IFilters> {
    return this.filetrObs$.asObservable();
  }

  public setFiltersObs(filters: IFilters): void {
    this.filetrObs$.next(filters);
  }

  public setFilters(newFilters: IFilters): void {
    this.currentFilters = newFilters;
    this.setFiltersObs(newFilters);
  }

  public applyFilters(): void {
    const filteredList = this.missionList.filter((mission) => {
      return _.isMatch(mission, this.currentFilters);
    });
    this.setMissionsObs(filteredList);
  }
}
