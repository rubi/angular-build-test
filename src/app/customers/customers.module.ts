import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersRoutingModule} from './customers-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        CustomersRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [CustomerListComponent]
})
export class CustomersModule {
}
