import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IMission } from '../models/mission.interface';

import { HttpService } from './http.service';

describe('HttpService', () => {
    let service: HttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });
        service = TestBed.inject(HttpService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get Data from API', () => {
        const baseURL = 'https://api.spacexdata.com/v3/launches?limit=100&launch_success=true';
        const missions = [
            {
                mission_name: 'RatSat',
                flight_number: 4,
                mission_id: [],
                launch_year: '2008',
                launch_success: 'true',
                links: {
                    mission_patch_small: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png'
                },
                rocket: {
                    first_stage: {
                        cores: [{
                            land_success: 'false'
                        }]
                    }
                }
            }
        ];
        const formattedMissions: IMission[] = [
            {
                mission_name: 'RatSat',
                flight_number: 4,
                mission_id: [],
                imgUrl: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
                launch_year: '2008',
                launch_success: 'true',
                land_success: 'false'
            }
        ];
        service.getAllMissions().subscribe(response => {
            expect(response).toEqual(formattedMissions);
        });
        const req = httpMock.expectOne(baseURL);
        req.flush(missions);
        httpMock.verify();
    });
});
