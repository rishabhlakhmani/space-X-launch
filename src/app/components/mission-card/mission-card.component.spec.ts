import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionCardComponent } from './mission-card.component';

describe('MissionCardComponent', () => {
    let component: MissionCardComponent;
    let fixture: ComponentFixture<MissionCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MissionCardComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MissionCardComponent);
        component = fixture.componentInstance;
        component.isLoaded = true;
        component.mission = {
            mission_name: 'RatSat',
            flight_number: 4,
            mission_id: [],
            imgUrl: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
            launch_year: '2008',
            launch_success: 'true',
            land_success: 'false'
        };
        fixture.detectChanges();
    });

    it('should render mission-card', () => {
        expect(fixture.nativeElement.querySelector('img').src).toBe('https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png');
    });
});
