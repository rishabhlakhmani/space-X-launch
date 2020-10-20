import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private titleService: Title, private metaTagService: Meta) { }

    ngOnInit(): void {
        this.titleService.setTitle('SpaceX Launch with Angular');
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Angular SEO Integration, SpaceX Launch, Spacex APIs, Angular Universal, Angular 10' },
            { name: 'author', content: 'Rishabh Lakhmani' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { charset: 'UTF-8' }
          ]);
    }
}
