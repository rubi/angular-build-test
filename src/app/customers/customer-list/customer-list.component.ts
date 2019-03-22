import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

    public dateTime: string = '';

    constructor() {
        this.dateTime = moment().format();
    }

    ngOnInit() {

    }

}
