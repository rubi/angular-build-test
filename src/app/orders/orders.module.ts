import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrderListComponent} from './order-list/order-list.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        OrdersRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [OrderListComponent]
})
export class OrdersModule {
}
