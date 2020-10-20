import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IMission } from '../models/mission.interface';

import { MissionsService } from './missions.service';

describe('MissionsService', () => {
  let service: MissionsService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit and subscribe missions list', () => {
    service.setMissionsObs(missions);
    service.getMissionsObs().subscribe((value) => {
      expect(value).toEqual(missions);
    });
  });

  it('should set missionList and publish', () => {
    spyOn(service, 'setMissionsObs');
    service.setMissionsList(missions);
    expect(service.setMissionsObs).toHaveBeenCalled();
  });

  it('should emit and subscribe Filetrs', () => {
    service.setFiltersObs({ launch_success: 'true' });
    service.getFiltersObs().subscribe((value) => {
      expect(value).toEqual({ launch_success: 'true' });
    });
  });

  it('#getAllMissions should fetch all missions from API', (done: DoneFn) => {
    const httpService = jasmine.createSpyObj('HttpService', ['getAllMissions']);
    httpService.getAllMissions.and.returnValue(of(missions));
    service.getAllMissions().subscribe((value) => {
      expect(value.length).toBeGreaterThan(0);
      done();
    });
  }, 10000);

  it('should apply Filetrs', () => {
    spyOn(service, 'setMissionsObs');
    service.setMissionsList(missions);
    service.setFilters({ launch_success: 'false' });
    service.applyFilters();
    expect(service.setMissionsObs).toHaveBeenCalledWith([]);
  });
});
