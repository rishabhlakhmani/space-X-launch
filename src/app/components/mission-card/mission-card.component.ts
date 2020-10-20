import { Component, Input } from '@angular/core';
import { IMission } from 'src/app/models/mission.interface';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.scss'],
})
export class MissionCardComponent {
  @Input() mission: IMission;
  public isLoaded = false;

  public removeLoader(): void {
    this.isLoaded = true;
  }
}
