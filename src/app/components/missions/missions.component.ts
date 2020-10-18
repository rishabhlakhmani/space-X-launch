import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IFilters } from 'src/app/models/filters.interface';
import { IMission } from 'src/app/models/mission.interface';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
    selector: 'app-missions',
    templateUrl: './missions.component.html',
    styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit, OnDestroy {

    public missions: Observable<IMission[]>;
    constructor(private missionService: MissionsService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route
            .queryParams.pipe(
                switchMap((params) => {
                    return of(params);
                }
                )).subscribe(params => {
                    this.missionService.setFilters(params as IFilters);
                    if (this.missionService.missionList) {
                        this.missionService.applyFilters();
                    } else {
                        this.missionService.getAllMissions().subscribe(missions => {
                            this.missionService.setMissionsList(missions);
                            this.missionService.applyFilters();
                        });
                    }
                });

        this.missions = this.missionService.getMissionsObs();
    }

    ngOnDestroy(): void {
    }

    trackByFn(index, item): number {
        return item.flight_number;
    }

}
