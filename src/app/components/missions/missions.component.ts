import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IFilters } from 'src/app/models/filters.interface';
import { IMission } from 'src/app/models/mission.interface';
import { MissionsService } from 'src/app/services/missions.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-missions',
    templateUrl: './missions.component.html',
    styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit, OnDestroy {

    public missions: Observable<IMission[]>;
    constructor(private missionService: MissionsService, private route: ActivatedRoute,
                private titleService: Title, private metaTagService: Meta) { }

    ngOnInit(): void {
        this.route.data.pipe(
            switchMap((data: { allMissions: IMission[] }) => {
                return of(data);
            }
            )).subscribe((data) => {
                this.missionService.setMissionsList(data.allMissions);
            });
        this.route
            .queryParams.pipe(
                switchMap((params) => {
                    return of(params);
                }
                )).subscribe(params => {
                    this.missionService.setFilters(params as IFilters);
                    this.missionService.applyFilters();
                });

        this.missions = this.missionService.getMissionsObs();

        this.titleService.setTitle('Spacex Mission List');
        this.metaTagService.updateTag(
            { name: 'description', content: 'mission list' }
        );
    }

    ngOnDestroy(): void {
    }

    trackByFn(index, item): number {
        return item.flight_number;
    }

}
