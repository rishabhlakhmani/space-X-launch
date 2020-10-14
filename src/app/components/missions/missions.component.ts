import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-missions',
    templateUrl: './missions.component.html',
    styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {

    public missions;
    constructor(private httpServie: HttpService) { }

    ngOnInit(): void {
        this.missions = this.httpServie.getAllMissions();
        this.missions.subscribe(res => {
            return res;
        });
    }

}
