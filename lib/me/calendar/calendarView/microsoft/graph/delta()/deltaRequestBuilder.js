"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var microsoft_graph_delta_1 = require("./microsoft.graph.delta");
Object.defineProperty(exports, "Microsoft", { enumerable: true, get: function () { return microsoft_graph_delta_1.Microsoft; } });
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me/calendar/calendarView/microsoft.graph.delta()  */
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
microsoft_graph_delta_1.graph.deltaRequestBuilder;
{
    currentPath: string;
    httpCore: kiota_abstractions_1.HttpCore;
    isRawUrl: boolean;
    pathSegment: string;
    constructor(currentPath, string, httpCore, kiota_abstractions_1.HttpCore, isRawUrl, boolean = true);
    {
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.delta()";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    ;
    createGetRequestInfo(h ?  : object | undefined, o ?  : kiota_abstractions_1.MiddlewareOption[] | undefined);
    kiota_abstractions_1.RequestInfo;
    {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    }
    ;
    get(h ?  : object | undefined, o ?  : kiota_abstractions_1.MiddlewareOption[] | undefined, responseHandler ?  : kiota_abstractions_1.ResponseHandler | undefined);
    Promise < microsoft_graph_delta_1.Microsoft.graph.delta[] | undefined > {
        const: requestInfo = this.createGetRequestInfo(h, o),
        return: (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendCollectionAsync(requestInfo, microsoft_graph_delta_1.Microsoft.graph.delta, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'))
    };
}
