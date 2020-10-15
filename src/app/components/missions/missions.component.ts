import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
        this.missionService.getAllMissions();
        this.subscription = this.route
            .queryParams
            .subscribe(params => {
                this.missionService.setFilters(params as IFilters);
                console.log(params);
            });
        this.missions = this.missionService.getMissionsObs();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
      }

}
