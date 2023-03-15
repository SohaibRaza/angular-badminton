import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var OpenInBrowser = /** @class */ (function (_super) {
    __extends(OpenInBrowser, _super);
    function OpenInBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenInBrowser.prototype.openUrl = function (url) { return cordova(this, "openUrl", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    OpenInBrowser.pluginName = "OpenInBrowser";
    OpenInBrowser.plugin = "cordova-plugin-open-in-browser";
    OpenInBrowser.pluginRef = "OpenInBrowser";
    OpenInBrowser.repo = "https://github.com/devgrigor/open-in-browser";
    OpenInBrowser.platforms = ["iOS"];
    OpenInBrowser = __decorate([
        Injectable()
    ], OpenInBrowser);
    return OpenInBrowser;
}(IonicNativePlugin));
export { OpenInBrowser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29wZW4taW4tYnJvd3Nlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFTckMsaUNBQWlCOzs7O0lBVWhELCtCQUFPLGFBQUMsR0FBVzs7Ozs7O0lBVlYsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQVYxQjtFQVVtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdPcGVuSW5Ccm93c2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tb3Blbi1pbi1icm93c2VyJyxcbiAgcGx1Z2luUmVmOiAnT3BlbkluQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZGV2Z3JpZ29yL29wZW4taW4tYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcGVuSW5Ccm93c2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIFlvdXIgcGx1Z2luIHBsdWdpbiBmdW5jdGlvbnMgZ28gaGVyZS4gXG4gICAgICogRnVuY3Rpb24gbmFtZXMgc2hvdWxkIG1hdGNoIHRoZSBvbmVzIGluIHlvdXIgLnN3aWZ0ICYgLmpzIGZpbGVzLlxuICAgICAqIE90aGVyd2lzZSB5b3Ugd29uJ3QgYmUgYWJsZSB0byBleGVjdXRlIHRoZW0uXG4gICAgICovXG4gICAgQENvcmRvdmEoe1xuICAgICAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgICAgIGVycm9ySW5kZXg6IDFcbiAgICB9KVxuICAgIG9wZW5VcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSJdfQ==