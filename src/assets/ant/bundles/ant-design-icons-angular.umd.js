(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ant-design-palettes'), require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ant-design/icons-angular', ['exports', 'ant-design-palettes', '@angular/common', '@angular/common/http', '@angular/core', '@angular/platform-browser', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['ant-design'] = global['ant-design'] || {}, global['ant-design']['icons-angular'] = {}),global.antDesignPalettes,global.ng.common,global.ng.common.http,global.ng.core,global.ng.platformBrowser,global.rxjs,global.rxjs.operators));
}(this, (function (exports,antDesignPalettes,common,http,core,platformBrowser,rxjs,operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var antIconConsolePrefix = '[@ant-design/icons-angular]: ';
    /**
     * @param {?} message
     * @return {?}
     */
    function printErr(message) {
        console.error("" + antIconConsolePrefix + message + ".");
    }
    /**
     * @param {?} message
     * @return {?}
     */
    function printWarn(message) {
        console.warn("" + antIconConsolePrefix + message + ".");
    }
    /**
     * @param {?} primaryColor
     * @return {?}
     */
    function getSecondaryColor(primaryColor) {
        return antDesignPalettes.generate(primaryColor)[0];
    }
    /**
     * @param {?} name
     * @param {?} theme
     * @return {?}
     */
    function withSuffix(name, theme) {
        switch (theme) {
            case 'fill': return name + "-fill";
            case 'outline': return name + "-o";
            case 'twotone': return name + "-twotone";
            case undefined: return name;
            default: throw new Error(antIconConsolePrefix + "Theme \"" + theme + "\" is not a recognized theme!");
        }
    }
    /**
     * @param {?} name
     * @param {?} theme
     * @param {?} pri
     * @param {?} sec
     * @return {?}
     */
    function withSuffixAndColor(name, theme, pri, sec) {
        return withSuffix(name, theme) + "-" + pri + "-" + sec;
    }
    /**
     * @param {?} abbr
     * @return {?}
     */
    function mapAbbrToTheme(abbr) {
        return abbr === 'o' ? 'outline' : ( /** @type {?} */(abbr));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function alreadyHasAThemeSuffix(name) {
        return name.endsWith('-fill') || name.endsWith('-o') || name.endsWith('-twotone');
    }
    /**
     * @param {?} target
     * @return {?}
     */
    function isIconDefinition(target) {
        return (typeof target === 'object' &&
            typeof target.name === 'string' &&
            (typeof target.theme === 'string' || target.theme === undefined) &&
            typeof target.icon === 'string');
    }
    /**
     * Get an `IconDefinition` object from abbreviation type, like `account-book-fill`.
     * @param {?} str
     * @return {?}
     */
    function getIconDefinitionFromAbbr(str) {
        /** @type {?} */
        var arr = str.split('-');
        /** @type {?} */
        var theme = mapAbbrToTheme(arr.splice(arr.length - 1, 1)[0]);
        /** @type {?} */
        var name = arr.join('-');
        return ( /** @type {?} */({
            name: name,
            theme: theme,
            icon: ''
        }));
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    function cloneSVG(svg) {
        return ( /** @type {?} */(svg.cloneNode(true)));
    }
    /**
     * Parse inline SVG string and replace colors with placeholders. For twotone icons only.
     * @param {?} raw
     * @return {?}
     */
    function replaceFillColor(raw) {
        return raw
            .replace(/['"]#333['"]/g, '"primaryColor"')
            .replace(/['"]#E6E6E6['"]/g, '"secondaryColor"')
            .replace(/['"]#D9D9D9['"]/g, '"secondaryColor"')
            .replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
    }
    /**
     * Split a name with namespace in it into a tuple like [ name, namespace ].
     * @param {?} type
     * @return {?}
     */
    function getNameAndNamespace(type) {
        /** @type {?} */
        var split = type.split(':');
        switch (split.length) {
            case 1: return [type, ''];
            case 2: return [split[1], split[0]];
            default: throw new Error(antIconConsolePrefix + "The icon type " + type + " is not valid!");
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    function hasNamespace(type) {
        return getNameAndNamespace(type)[1] !== '';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function NameSpaceIsNotSpecifyError() {
        return new Error(antIconConsolePrefix + "Type should have a namespace. Try \"namespace:" + name + "\".");
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    function IconNotFoundError(icon) {
        return new Error(antIconConsolePrefix + "the icon " + icon + " does not exist or is not registered.");
    }
    /**
     * @return {?}
     */
    function HttpModuleNotImport() {
        printErr("you need to import \"HttpClientModule\" to use dynamic importing");
        return null;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    function UrlNotSafeError(url) {
        return new Error(antIconConsolePrefix + "The url \"" + url + "\" is unsafe.");
    }
    /**
     * @return {?}
     */
    function SVGTagNotFoundError() {
        return new Error(antIconConsolePrefix + "<svg> tag not found");
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconService = /** @class */ (function () {
        function IconService(_rendererFactory, _handler, _document, sanitizer) {
            this._rendererFactory = _rendererFactory;
            this._handler = _handler;
            this._document = _document;
            this.sanitizer = sanitizer;
            this.defaultTheme = 'outline';
            /**
             * All icon definitions would be registered here.
             */
            this._svgDefinitions = new Map();
            /**
             * Cache all rendered icons. Icons are identified by name, theme,
             * and for twotone icons, primary color and secondary color.
             */
            this._svgRenderedDefinitions = new Map();
            this._inProgressFetches = new Map();
            /**
             * Url prefix for fetching inline SVG by dynamic importing.
             */
            this._assetsUrlRoot = '';
            this._twoToneColorPalette = {
                primaryColor: '#333333',
                secondaryColor: '#E6E6E6'
            };
            this._renderer = this._rendererFactory.createRenderer(null, null);
            if (this._handler) {
                this._http = new http.HttpClient(this._handler);
            }
        }
        Object.defineProperty(IconService.prototype, "twoToneColor", {
            get: /**
             * @return {?}
             */ function () {
                return ( /** @type {?} */(__assign({}, this._twoToneColorPalette))); // Make a copy to avoid unexpected changes.
            },
            set: /**
             * @param {?} __0
             * @return {?}
             */ function (_a) {
                var primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor;
                this._twoToneColorPalette.primaryColor = primaryColor;
                this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Change the prefix of the inline svg resources, so they could be deployed elsewhere, like CDN.
         * @param prefix
         */
        /**
         * Change the prefix of the inline svg resources, so they could be deployed elsewhere, like CDN.
         * @param {?} prefix
         * @return {?}
         */
        IconService.prototype.changeAssetsSource = /**
         * Change the prefix of the inline svg resources, so they could be deployed elsewhere, like CDN.
         * @param {?} prefix
         * @return {?}
         */
            function (prefix) {
                this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
            };
        /**
         * Add icons provided by ant design.
         * @param icons
         */
        /**
         * Add icons provided by ant design.
         * @param {...?} icons
         * @return {?}
         */
        IconService.prototype.addIcon = /**
         * Add icons provided by ant design.
         * @param {...?} icons
         * @return {?}
         */
            function () {
                var _this = this;
                var icons = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    icons[_i] = arguments[_i];
                }
                icons.forEach(function (icon) {
                    _this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
                });
            };
        /**
         * Register an icon. Namespace is required.
         * @param type
         * @param literal
         */
        /**
         * Register an icon. Namespace is required.
         * @param {?} type
         * @param {?} literal
         * @return {?}
         */
        IconService.prototype.addIconLiteral = /**
         * Register an icon. Namespace is required.
         * @param {?} type
         * @param {?} literal
         * @return {?}
         */
            function (type, literal) {
                var _a = __read(getNameAndNamespace(type), 2), name = _a[0], namespace = _a[1];
                if (!namespace) {
                    throw NameSpaceIsNotSpecifyError();
                }
                this.addIcon({ name: type, icon: literal });
            };
        /**
         * Remove all cache.
         */
        /**
         * Remove all cache.
         * @return {?}
         */
        IconService.prototype.clear = /**
         * Remove all cache.
         * @return {?}
         */
            function () {
                this._svgDefinitions.clear();
                this._svgRenderedDefinitions.clear();
            };
        /**
         * Get a rendered `SVGElement`.
         * @param icon
         * @param twoToneColor
         */
        /**
         * Get a rendered `SVGElement`.
         * @param {?} icon
         * @param {?=} twoToneColor
         * @return {?}
         */
        IconService.prototype.getRenderedContent = /**
         * Get a rendered `SVGElement`.
         * @param {?} icon
         * @param {?=} twoToneColor
         * @return {?}
         */
            function (icon, twoToneColor) {
                var _this = this;
                // If `icon` is a `IconDefinition`, go to the next step. If not, try to fetch it from cache.
                /** @type {?} */
                var definition = isIconDefinition(icon) ? ( /** @type {?} */(icon)) : this._svgDefinitions.get(( /** @type {?} */(icon)));
                // If `icon` is a `IconDefinition` of successfully fetch, wrap it in an `Observable`. Otherwise try to fetch it from remote.
                /** @type {?} */
                var $iconDefinition = definition ? rxjs.of(definition) : this._getFromRemote(( /** @type {?} */(icon)));
                // If finally get an `IconDefinition`, render and return it. Otherwise throw an error.
                return $iconDefinition.pipe(operators.map(function (i) {
                    if (!i) {
                        throw IconNotFoundError(( /** @type {?} */(icon)));
                    }
                    return _this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
                }));
            };
        /**
         * Get raw svg and assemble a `IconDefinition` object.
         * @param type
         */
        /**
         * Get raw svg and assemble a `IconDefinition` object.
         * @protected
         * @param {?} type
         * @return {?}
         */
        IconService.prototype._getFromRemote = /**
         * Get raw svg and assemble a `IconDefinition` object.
         * @protected
         * @param {?} type
         * @return {?}
         */
            function (type) {
                var _this = this;
                if (!this._http) {
                    return rxjs.of(HttpModuleNotImport());
                }
                // If multi directive ask for the same icon at the same time, http request should only be fired once.
                /** @type {?} */
                var inProgress = this._inProgressFetches.get(type);
                // If there's no other directive asking for the same icon, fire a request.
                if (!inProgress) {
                    var _a = __read(getNameAndNamespace(type), 2), name_1 = _a[0], namespace = _a[1];
                    // If the string has a namespace within, create a simple `IconDefinition`.
                    /** @type {?} */
                    var icon_1 = namespace
                        ? { name: name_1, icon: '' }
                        : getIconDefinitionFromAbbr(name_1);
                    /** @type {?} */
                    var url = namespace
                        ? this._assetsUrlRoot + "assets/" + namespace + "/" + icon_1.name + ".svg"
                        : this._assetsUrlRoot + "assets/" + icon_1.theme + "/" + icon_1.name + ".svg";
                    /** @type {?} */
                    var safeUrl = this.sanitizer.sanitize(core.SecurityContext.URL, url);
                    if (!safeUrl) {
                        throw UrlNotSafeError(url);
                    }
                    // Wrap a `IconDefinition`, cache it, delete the shared work.
                    inProgress = this._http.get(safeUrl, { responseType: 'text' }).pipe(operators.map(function (literal) { return (__assign({}, icon_1, { icon: literal })); }), operators.tap(function (definition) { return _this.addIcon(definition); }), operators.finalize(function () { return _this._inProgressFetches.delete(type); }), operators.catchError(function () { return rxjs.of(null); }), operators.share());
                    this._inProgressFetches.set(type, inProgress);
                }
                // Otherwise just reuse other directive's request.
                return inProgress;
            };
        /**
         * Render a new `SVGElement` for given `IconDefinition`, or make a copy from cache.
         * @param icon
         * @param twoToneColor
         */
        /**
         * Render a new `SVGElement` for given `IconDefinition`, or make a copy from cache.
         * @protected
         * @param {?} icon
         * @param {?=} twoToneColor
         * @return {?}
         */
        IconService.prototype._loadSVGFromCacheOrCreateNew = /**
         * Render a new `SVGElement` for given `IconDefinition`, or make a copy from cache.
         * @protected
         * @param {?} icon
         * @param {?=} twoToneColor
         * @return {?}
         */
            function (icon, twoToneColor) {
                /** @type {?} */
                var svg;
                /** @type {?} */
                var pri = twoToneColor || this._twoToneColorPalette.primaryColor;
                /** @type {?} */
                var sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
                /** @type {?} */
                var key = icon.theme === 'twotone'
                    ? withSuffixAndColor(icon.name, icon.theme, pri, sec)
                    : icon.theme === undefined ? icon.name : withSuffix(icon.name, icon.theme);
                // Try to make a copy from cache.
                /** @type {?} */
                var cached = this._svgRenderedDefinitions.get(key);
                if (cached) {
                    svg = cached.icon;
                }
                else {
                    svg = this._setSVGAttribute(this._colorizeSVGIcon(
                    // Icons provided by ant design should be refined to remove preset colors.
                    this._createSVGElementFromString(hasNamespace(icon.name) ? icon.icon : replaceFillColor(icon.icon)), icon.theme === 'twotone', pri, sec));
                    // Cache it.
                    this._svgRenderedDefinitions.set(key, ( /** @type {?} */(__assign({}, icon, { icon: svg }))));
                }
                return cloneSVG(svg);
            };
        /**
         * @protected
         * @param {?} str
         * @return {?}
         */
        IconService.prototype._createSVGElementFromString = /**
         * @protected
         * @param {?} str
         * @return {?}
         */
            function (str) {
                /** @type {?} */
                var div = this._document.createElement('div');
                div.innerHTML = str;
                /** @type {?} */
                var svg = div.querySelector('svg');
                if (!svg) {
                    throw SVGTagNotFoundError;
                }
                return svg;
            };
        /**
         * @protected
         * @param {?} svg
         * @return {?}
         */
        IconService.prototype._setSVGAttribute = /**
         * @protected
         * @param {?} svg
         * @return {?}
         */
            function (svg) {
                this._renderer.setAttribute(svg, 'width', '1em');
                this._renderer.setAttribute(svg, 'height', '1em');
                return svg;
            };
        /**
         * @protected
         * @param {?} svg
         * @param {?} twotone
         * @param {?} pri
         * @param {?} sec
         * @return {?}
         */
        IconService.prototype._colorizeSVGIcon = /**
         * @protected
         * @param {?} svg
         * @param {?} twotone
         * @param {?} pri
         * @param {?} sec
         * @return {?}
         */
            function (svg, twotone, pri, sec) {
                if (twotone) {
                    /** @type {?} */
                    var children = svg.childNodes;
                    /** @type {?} */
                    var length_1 = children.length;
                    for (var i = 0; i < length_1; i++) {
                        /** @type {?} */
                        var child = ( /** @type {?} */(children[i]));
                        if (child.getAttribute('fill') === 'secondaryColor') {
                            this._renderer.setAttribute(child, 'fill', sec);
                        }
                        else {
                            this._renderer.setAttribute(child, 'fill', pri);
                        }
                    }
                }
                this._renderer.setAttribute(svg, 'fill', 'currentColor');
                return svg;
            };
        /** @nocollapse */
        IconService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2 },
                { type: http.HttpBackend, decorators: [{ type: core.Optional }] },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return IconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconDirective = /** @class */ (function () {
        function IconDirective(_iconService, _elementRef, _renderer) {
            this._iconService = _iconService;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        IconDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.type || changes.theme || changes.twoToneColor) {
                    this._changeIcon().then();
                }
            };
        /**
         * Render a new icon in the current element. Remove the icon when `type` is falsy.
         */
        /**
         * Render a new icon in the current element. Remove the icon when `type` is falsy.
         * @protected
         * @return {?}
         */
        IconDirective.prototype._changeIcon = /**
         * Render a new icon in the current element. Remove the icon when `type` is falsy.
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(function (resolve) {
                    if (!_this.type) {
                        _this._clearSVGElement();
                        resolve(null);
                    }
                    else {
                        _this._iconService.getRenderedContent(_this._parseIconType(_this.type, _this.theme), _this.twoToneColor).subscribe(function (svg) {
                            _this._setSVGElement(svg);
                            resolve(svg);
                        });
                    }
                });
            };
        /**
         * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
         * If namespace is specified, ignore theme because it meaningless for users' icons.
         * @param type
         * @param theme
         */
        /**
         * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
         * If namespace is specified, ignore theme because it meaningless for users' icons.
         * @protected
         * @param {?} type
         * @param {?} theme
         * @return {?}
         */
        IconDirective.prototype._parseIconType = /**
         * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
         * If namespace is specified, ignore theme because it meaningless for users' icons.
         * @protected
         * @param {?} type
         * @param {?} theme
         * @return {?}
         */
            function (type, theme) {
                if (isIconDefinition(type)) {
                    return type;
                }
                else {
                    var _a = __read(getNameAndNamespace(type), 2), name_1 = _a[0], namespace = _a[1];
                    if (namespace) {
                        return type;
                    }
                    if (alreadyHasAThemeSuffix(name_1)) {
                        if (!!theme) {
                            printWarn("'type' " + name_1 + " already gets a theme inside so 'theme' " + theme + " would be ignored");
                        }
                        return name_1;
                    }
                    else {
                        return withSuffix(name_1, theme || this._iconService.defaultTheme);
                    }
                }
            };
        /**
         * @protected
         * @param {?} svg
         * @return {?}
         */
        IconDirective.prototype._setSVGElement = /**
         * @protected
         * @param {?} svg
         * @return {?}
         */
            function (svg) {
                this._clearSVGElement();
                this._renderer.appendChild(this._elementRef.nativeElement, svg);
            };
        /**
         * @protected
         * @return {?}
         */
        IconDirective.prototype._clearSVGElement = /**
         * @protected
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = this._elementRef.nativeElement;
                /** @type {?} */
                var children = el.childNodes;
                /** @type {?} */
                var length = children.length;
                for (var i = length - 1; i >= 0; i--) {
                    /** @type {?} */
                    var child = ( /** @type {?} */(children[i]));
                    if (child.tagName.toLowerCase() === 'svg') {
                        this._renderer.removeChild(el, child);
                    }
                }
            };
        IconDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[antIcon]'
                    },] }
        ];
        /** @nocollapse */
        IconDirective.ctorParameters = function () {
            return [
                { type: IconService },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        IconDirective.propDecorators = {
            type: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            twoToneColor: [{ type: core.Input }]
        };
        return IconDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconModule = /** @class */ (function () {
        function IconModule() {
        }
        IconModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [IconDirective],
                        declarations: [IconDirective],
                        providers: [IconService]
                    },] }
        ];
        return IconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This icon file is generated by build/generate.ts
    // tslint:disable
    /** @type {?} */
    var manifest = {
        fill: [
            'account-book',
            'alert',
            'alipay-circle',
            'alipay-square',
            'amazon-circle',
            'aliwangwang',
            'android',
            'amazon-square',
            'api',
            'appstore',
            'apple',
            'audio',
            'bank',
            'bell',
            'book',
            'behance-square',
            'behance-circle',
            'box-plot',
            'build',
            'backward',
            'calculator',
            'calendar',
            'camera',
            'car',
            'caret-down',
            'bulb',
            'caret-right',
            'caret-up',
            'caret-left',
            'carry-out',
            'check-circle',
            'chrome',
            'check-square',
            'ci-circle',
            'clock-circle',
            'close-circle',
            'close-square',
            'cloud',
            'code-sandbox-circle',
            'code-sandbox-square',
            'code',
            'codepen-circle',
            'codepen-square',
            'contacts',
            'compass',
            'container',
            'control',
            'copy',
            'copyright-circle',
            'credit-card',
            'crown',
            'customer-service',
            'dashboard',
            'delete',
            'diff',
            'dingtalk-circle',
            'dingtalk-square',
            'database',
            'dislike',
            'dollar-circle',
            'down-circle',
            'dribbble-circle',
            'dribbble-square',
            'dropbox-circle',
            'dropbox-square',
            'edit',
            'environment',
            'euro-circle',
            'exclamation-circle',
            'experiment',
            'eye-invisible',
            'down-square',
            'facebook',
            'eye',
            'fast-backward',
            'fast-forward',
            'file-add',
            'file-excel',
            'file-exclamation',
            'file-image',
            'file-markdown',
            'file-pdf',
            'file-ppt',
            'file-text',
            'file-unknown',
            'file-word',
            'file-zip',
            'filter',
            'flag',
            'file',
            'folder-add',
            'folder-open',
            'folder',
            'fire',
            'forward',
            'frown',
            'funnel-plot',
            'gift',
            'github',
            'fund',
            'gitlab',
            'golden',
            'google-circle',
            'google-plus-circle',
            'google-plus-square',
            'google-square',
            'hdd',
            'heart',
            'highlight',
            'home',
            'hourglass',
            'html5',
            'ie-circle',
            'ie-square',
            'info-circle',
            'instagram',
            'insurance',
            'left-circle',
            'layout',
            'interation',
            'left-square',
            'idcard',
            'linkedin',
            'lock',
            'like',
            'medicine-box',
            'medium-circle',
            'medium-square',
            'meh',
            'message',
            'minus-circle',
            'minus-square',
            'mobile',
            'notification',
            'money-collect',
            'pause-circle',
            'pay-circle',
            'phone',
            'picture',
            'pie-chart',
            'play-circle',
            'play-square',
            'plus-circle',
            'pound-circle',
            'plus-square',
            'mail',
            'printer',
            'profile',
            'pushpin',
            'qq-circle',
            'project',
            'question-circle',
            'qq-square',
            'read',
            'red-envelope',
            'reconciliation',
            'property-safety',
            'reddit-circle',
            'reddit-square',
            'rest',
            'right-circle',
            'safety-certificate',
            'rocket',
            'save',
            'schedule',
            'security-scan',
            'right-square',
            'shop',
            'shopping',
            'setting',
            'sketch-circle',
            'sketch-square',
            'slack-circle',
            'skin',
            'slack-square',
            'sliders',
            'smile',
            'skype',
            'step-backward',
            'step-forward',
            'sound',
            'stop',
            'switcher',
            'tablet',
            'snippets',
            'tags',
            'tag',
            'taobao-square',
            'taobao-circle',
            'thunderbolt',
            'tool',
            'star',
            'trademark-circle',
            'twitter-circle',
            'trophy',
            'twitter-square',
            'unlock',
            'up-square',
            'usb',
            'up-circle',
            'wallet',
            'warning',
            'wechat',
            'video-camera',
            'windows',
            'yahoo',
            'weibo-square',
            'weibo-circle',
            'youtube',
            'yuque',
            'zhihu-circle',
            'zhihu-square'
        ],
        outline: [
            'account-book',
            'alert',
            'alipay-circle',
            'aliwangwang',
            'android',
            'api',
            'appstore',
            'apple',
            'audio',
            'bank',
            'bell',
            'book',
            'behance-square',
            'box-plot',
            'build',
            'backward',
            'calculator',
            'calendar',
            'camera',
            'car',
            'caret-down',
            'bulb',
            'caret-right',
            'caret-up',
            'caret-left',
            'carry-out',
            'check-circle',
            'chrome',
            'check-square',
            'clock-circle',
            'close-circle',
            'close-square',
            'cloud',
            'code',
            'codepen-circle',
            'contacts',
            'compass',
            'container',
            'control',
            'copy',
            'credit-card',
            'crown',
            'customer-service',
            'dashboard',
            'delete',
            'diff',
            'database',
            'dislike',
            'down-circle',
            'dribbble-square',
            'edit',
            'environment',
            'exclamation-circle',
            'experiment',
            'eye-invisible',
            'down-square',
            'facebook',
            'eye',
            'fast-backward',
            'fast-forward',
            'file-add',
            'file-excel',
            'file-exclamation',
            'file-image',
            'file-markdown',
            'file-pdf',
            'file-ppt',
            'file-text',
            'file-unknown',
            'file-word',
            'file-zip',
            'filter',
            'flag',
            'file',
            'folder-add',
            'folder-open',
            'folder',
            'fire',
            'forward',
            'frown',
            'funnel-plot',
            'gift',
            'github',
            'fund',
            'gitlab',
            'hdd',
            'heart',
            'highlight',
            'home',
            'hourglass',
            'html5',
            'info-circle',
            'instagram',
            'insurance',
            'left-circle',
            'layout',
            'interation',
            'left-square',
            'idcard',
            'linkedin',
            'lock',
            'like',
            'medicine-box',
            'meh',
            'message',
            'minus-circle',
            'minus-square',
            'mobile',
            'notification',
            'money-collect',
            'pause-circle',
            'pay-circle',
            'phone',
            'picture',
            'pie-chart',
            'play-circle',
            'play-square',
            'plus-circle',
            'plus-square',
            'mail',
            'printer',
            'profile',
            'pushpin',
            'project',
            'question-circle',
            'read',
            'red-envelope',
            'reconciliation',
            'property-safety',
            'rest',
            'right-circle',
            'safety-certificate',
            'rocket',
            'save',
            'schedule',
            'security-scan',
            'right-square',
            'shop',
            'shopping',
            'setting',
            'skin',
            'slack-square',
            'sliders',
            'smile',
            'skype',
            'step-backward',
            'step-forward',
            'sound',
            'stop',
            'switcher',
            'tablet',
            'snippets',
            'tags',
            'tag',
            'taobao-circle',
            'thunderbolt',
            'tool',
            'star',
            'trophy',
            'unlock',
            'up-square',
            'usb',
            'up-circle',
            'wallet',
            'warning',
            'wechat',
            'video-camera',
            'windows',
            'yahoo',
            'weibo-square',
            'weibo-circle',
            'youtube',
            'yuque',
            'alibaba',
            'align-center',
            'alipay',
            'align-right',
            'align-left',
            'aliyun',
            'amazon',
            'ant-cloud',
            'ant-design',
            'apartment',
            'area-chart',
            'arrow-down',
            'arrow-up',
            'arrow-right',
            'arrow-left',
            'arrows-alt',
            'audit',
            'bars',
            'barcode',
            'behance',
            'bg-colors',
            'block',
            'bold',
            'border-bottom',
            'border-horizontal',
            'border-inner',
            'border-left',
            'border-outer',
            'border-top',
            'border-verticle',
            'border',
            'border-right',
            'branches',
            'check',
            'ci',
            'cloud-download',
            'cloud-server',
            'cloud-sync',
            'cloud-upload',
            'close',
            'cluster',
            'codepen',
            'coffee',
            'colum-height',
            'column-width',
            'code-sandbox',
            'bar-chart',
            'copyright',
            'dash',
            'deployment-unit',
            'desktop',
            'disconnect',
            'dingding',
            'dollar',
            'dot-chart',
            'double-left',
            'double-right',
            'download',
            'drag',
            'down',
            'dribbble',
            'dropbox',
            'ellipsis',
            'enter',
            'exception',
            'euro',
            'exclamation',
            'export',
            'fall',
            'file-done',
            'file-jpg',
            'file-search',
            'file-protect',
            'file-sync',
            'font-colors',
            'font-size',
            'fork',
            'form',
            'fullscreen-exit',
            'fullscreen',
            'gateway',
            'global',
            'gold',
            'google-plus',
            'google',
            'heat-map',
            'ie',
            'import',
            'inbox',
            'info',
            'issues-close',
            'italic',
            'laptop',
            'key',
            'left',
            'line-chart',
            'line-height',
            'line',
            'link',
            'loading-3-quarters',
            'loading',
            'login',
            'logout',
            'man',
            'medium-workmark',
            'menu-fold',
            'medium',
            'menu-unfold',
            'menu',
            'minus',
            'monitor',
            'mr',
            'ordered-list',
            'number',
            'paper-clip',
            'pause',
            'percentage',
            'pic-center',
            'pic-left',
            'pic-right',
            'plus',
            'poweroff',
            'pound',
            'qrcode',
            'qq',
            'question',
            'radar-chart',
            'radius-bottomleft',
            'radius-setting',
            'radius-bottomright',
            'radius-upleft',
            'radius-upright',
            'reddit',
            'reload',
            'reload-time',
            'redo',
            'retweet',
            'right',
            'rise',
            'rollback',
            'safety',
            'scan',
            'scissor',
            'robot',
            'search',
            'select',
            'share-alt',
            'shake',
            'shopping-cart',
            'shrink',
            'sketch',
            'slack',
            'small-dash',
            'solution',
            'sort-ascending',
            'sort-descending',
            'stock',
            'strikethrough',
            'swap-left',
            'swap',
            'swap-right',
            'sync',
            'table',
            'team',
            'to-top',
            'taobao',
            'trademark',
            'twitter',
            'underline',
            'undo',
            'unordered-list',
            'upload',
            'user-delete',
            'user-add',
            'up',
            'user',
            'usergroup-add',
            'transaction',
            'usergroup-delete',
            'vertical-align-bottom',
            'vertical-align-middle',
            'vertical-left',
            'vertical-right',
            'vertical-align-top',
            'weibo',
            'wifi',
            'woman',
            'zhihu',
            'zoom-in',
            'zoom-out'
        ],
        twotone: [
            'account-book',
            'alert',
            'api',
            'appstore',
            'audio',
            'bank',
            'bell',
            'book',
            'box-plot',
            'build',
            'calculator',
            'camera',
            'car',
            'bulb',
            'carry-out',
            'check-circle',
            'check-square',
            'clock-circle',
            'close-circle',
            'close-square',
            'cloud',
            'code',
            'contacts',
            'compass',
            'container',
            'control',
            'copy',
            'credit-card',
            'crown',
            'customer-service',
            'dashboard',
            'delete',
            'diff',
            'database',
            'dislike',
            'down-circle',
            'edit',
            'environment',
            'exclamation-circle',
            'experiment',
            'eye-invisible',
            'down-square',
            'eye',
            'file-add',
            'file-excel',
            'file-exclamation',
            'file-image',
            'file-markdown',
            'file-pdf',
            'file-ppt',
            'file-text',
            'file-unknown',
            'file-word',
            'file-zip',
            'filter',
            'flag',
            'file',
            'folder-add',
            'folder-open',
            'folder',
            'fire',
            'frown',
            'funnel-plot',
            'gift',
            'fund',
            'hdd',
            'heart',
            'highlight',
            'home',
            'hourglass',
            'html5',
            'info-circle',
            'insurance',
            'left-circle',
            'layout',
            'interation',
            'left-square',
            'idcard',
            'lock',
            'like',
            'medicine-box',
            'meh',
            'message',
            'minus-circle',
            'minus-square',
            'mobile',
            'notification',
            'money-collect',
            'pause-circle',
            'phone',
            'picture',
            'pie-chart',
            'play-circle',
            'play-square',
            'plus-circle',
            'pound-circle',
            'plus-square',
            'mail',
            'printer',
            'profile',
            'pushpin',
            'project',
            'question-circle',
            'red-envelope',
            'reconciliation',
            'property-safety',
            'rest',
            'right-circle',
            'safety-certificate',
            'rocket',
            'save',
            'schedule',
            'security-scan',
            'right-square',
            'shop',
            'shopping',
            'setting',
            'skin',
            'sliders',
            'smile',
            'sound',
            'stop',
            'switcher',
            'tablet',
            'snippets',
            'tags',
            'tag',
            'thunderbolt',
            'tool',
            'star',
            'trademark-circle',
            'trophy',
            'unlock',
            'up-square',
            'usb',
            'up-circle',
            'wallet',
            'warning',
            'video-camera',
            'ci',
            'copyright',
            'dollar',
            'euro',
            'gold',
            'canlendar'
        ]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.IconModule = IconModule;
    exports.IconService = IconService;
    exports.IconDirective = IconDirective;
    exports.NameSpaceIsNotSpecifyError = NameSpaceIsNotSpecifyError;
    exports.IconNotFoundError = IconNotFoundError;
    exports.HttpModuleNotImport = HttpModuleNotImport;
    exports.UrlNotSafeError = UrlNotSafeError;
    exports.SVGTagNotFoundError = SVGTagNotFoundError;
    exports.printErr = printErr;
    exports.printWarn = printWarn;
    exports.getSecondaryColor = getSecondaryColor;
    exports.withSuffix = withSuffix;
    exports.withSuffixAndColor = withSuffixAndColor;
    exports.mapAbbrToTheme = mapAbbrToTheme;
    exports.alreadyHasAThemeSuffix = alreadyHasAThemeSuffix;
    exports.isIconDefinition = isIconDefinition;
    exports.getIconDefinitionFromAbbr = getIconDefinitionFromAbbr;
    exports.cloneSVG = cloneSVG;
    exports.replaceFillColor = replaceFillColor;
    exports.getNameAndNamespace = getNameAndNamespace;
    exports.hasNamespace = hasNamespace;
    exports.antIconConsolePrefix = antIconConsolePrefix;
    exports.manifest = manifest;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ant-design-icons-angular.umd.js.map