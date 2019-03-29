const webpack = require('webpack');

module.exports = {
    "externals": {
        "moment": "moment",
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/router": "ng.router",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/elements": "ng.elements",
        "ng-zorro-antd": "global ant-design"
    }
}