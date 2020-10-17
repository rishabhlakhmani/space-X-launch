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

    public subscription = new Subscription()
    public missions: Observable<IMission[]>;
    constructor(private missionService: MissionsService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data.pipe(
            switchMap((data: {allMissions: IMission[]}) => {
                return of(data);
            }
            )).subscribe((data) => {
                this.missionService.setMissionsList(data.allMissions);
            });
        this.subscription = this.route
            .queryParams.pipe(
                switchMap((params) => {
                    return of(params);
                }
                )).subscribe(params => {
                    this.missionService.setFilters(params as IFilters);
                    this.missionService.applyFilters();
                });

        this.missions = this.missionService.getMissionsObs();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
