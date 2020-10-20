import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { IFilters } from 'src/app/models/filters.interface';
import { IMission } from 'src/app/models/mission.interface';
import { MissionsService } from 'src/app/services/missions.service';

import { MissionsComponent } from './missions.component';

describe('MissionsComponent', () => {
  let component: MissionsComponent;
  let fixture: ComponentFixture<MissionsComponent>;
  const missions: IMission[] = [
    {
      mission_name: 'RatSat',
      flight_number: 4,
      mission_id: [],
      imgUrl: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
      launch_year: '2008',
      launch_success: 'true',
      land_success: 'false',
    },
  ];

  class MissionServiceSub {
    missionList = [];
    currentFilters: IFilters;

    getMissionsObs = () => of(missions);

    setMissionsList = (allMissions) => {
      this.missionList = allMissions;
    };

    setFilters = (newFilters: IFilters) => {
      this.currentFilters = newFilters;
    };

    applyFilters = () => ({});
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MissionsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ data: missions }),
            queryParams: of({ launch_success: 'true' }),
          },
        },
        {
          provide: MissionsService,
          useClass: MissionServiceSub,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get missionList based on URL', () => {
    component.missions$.subscribe((list) => {
      expect(list.length).toBe(1);
    });
  });
});
