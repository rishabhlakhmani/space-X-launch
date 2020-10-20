import { Component, Input, OnInit } from '@angular/core';
import { IMission } from 'src/app/models/mission.interface';

@Component({
    selector: 'app-mission-card',
    templateUrl: './mission-card.component.html',
    styleUrls: ['./mission-card.component.scss']
})
export class MissionCardComponent implements OnInit {

    @Input() mission: IMission;
    public isLoaded = false;
    constructor() { }

    ngOnInit(): void {
    }

    public removeLoader(): void {
        this.isLoaded = true;
    }

}
