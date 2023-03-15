var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var OpenInBrowserOriginal = /** @class */ (function (_super) {
    __extends(OpenInBrowserOriginal, _super);
    function OpenInBrowserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenInBrowserOriginal.prototype.openUrl = function (url) { return cordova(this, "openUrl", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    OpenInBrowserOriginal.pluginName = "OpenInBrowser";
    OpenInBrowserOriginal.plugin = "cordova-plugin-open-in-browser";
    OpenInBrowserOriginal.pluginRef = "OpenInBrowser";
    OpenInBrowserOriginal.repo = "https://github.com/devgrigor/open-in-browser";
    OpenInBrowserOriginal.platforms = ["iOS"];
    return OpenInBrowserOriginal;
}(IonicNativePlugin));
var OpenInBrowser = new OpenInBrowserOriginal();
export { OpenInBrowser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29wZW4taW4tYnJvd3Nlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFTckMsaUNBQWlCOzs7O0lBVWhELCtCQUFPLGFBQUMsR0FBVzs7Ozs7O3dCQXBCdkI7RUFVbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnT3BlbkluQnJvd3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW9wZW4taW4tYnJvd3NlcicsXG4gIHBsdWdpblJlZjogJ09wZW5JbkJyb3dzZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RldmdyaWdvci9vcGVuLWluLWJyb3dzZXInLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbkluQnJvd3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBZb3VyIHBsdWdpbiBwbHVnaW4gZnVuY3Rpb25zIGdvIGhlcmUuIFxuICAgICAqIEZ1bmN0aW9uIG5hbWVzIHNob3VsZCBtYXRjaCB0aGUgb25lcyBpbiB5b3VyIC5zd2lmdCAmIC5qcyBmaWxlcy5cbiAgICAgKiBPdGhlcndpc2UgeW91IHdvbid0IGJlIGFibGUgdG8gZXhlY3V0ZSB0aGVtLlxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHtcbiAgICAgICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgICAgICBlcnJvckluZGV4OiAxXG4gICAgfSlcbiAgICBvcGVuVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0iXX0=