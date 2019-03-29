import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import { createCustomElement } from '@angular/elements';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [{provide: NZ_I18N, useValue: zh_CN}],
    bootstrap: [],
    entryComponents:[AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const elm = createCustomElement(AppComponent, { injector: this.injector });
        customElements.define('custom-element', elm);
    }
}
