import {Component} from '@angular/core';
import {hello} from './hello';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    public title = 'angular7-study';
    public hello: number = 0;

    constructor() {
        this.hello = hello;
    }
}
