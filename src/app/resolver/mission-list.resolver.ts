import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IMission } from '../models/mission.interface';
import { MissionsService } from '../services/missions.service';

@Injectable()
export class MissionsListResolver implements Resolve<IMission[]> {

    constructor(private missionService: MissionsService) {}

    resolve(): Observable<IMission[]>  {
        return this.missionService.getAllMissions();
      }

}
