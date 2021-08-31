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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkbookWorksheetRequestBuilder = void 0;
var workbookWorksheet_1 = require("../../../../workbookWorksheet");
var chartsRequestBuilder_1 = require("../charts/chartsRequestBuilder");
var workbookChartRequestBuilder_1 = require("../charts/item/workbookChartRequestBuilder");
var workbookNamedItemRequestBuilder_1 = require("../names/item/workbookNamedItemRequestBuilder");
var namesRequestBuilder_1 = require("../names/namesRequestBuilder");
var workbookPivotTableRequestBuilder_1 = require("../pivotTables/item/workbookPivotTableRequestBuilder");
var pivotTablesRequestBuilder_1 = require("../pivotTables/pivotTablesRequestBuilder");
var protectionRequestBuilder_1 = require("../protection/protectionRequestBuilder");
var workbookTableRequestBuilder_1 = require("../tables/item/workbookTableRequestBuilder");
var tablesRequestBuilder_1 = require("../tables/tablesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}  */
var WorkbookWorksheetRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new WorkbookWorksheetRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function WorkbookWorksheetRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(WorkbookWorksheetRequestBuilder.prototype, "charts", {
        get: function () {
            return new chartsRequestBuilder_1.ChartsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookWorksheetRequestBuilder.prototype, "names", {
        get: function () {
            return new namesRequestBuilder_1.NamesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookWorksheetRequestBuilder.prototype, "pivotTables", {
        get: function () {
            return new pivotTablesRequestBuilder_1.PivotTablesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookWorksheetRequestBuilder.prototype, "protection", {
        get: function () {
            return new protectionRequestBuilder_1.ProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookWorksheetRequestBuilder.prototype, "tables", {
        get: function () {
            return new tablesRequestBuilder_1.TablesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.worksheets.charts collection
     * @param id Unique identifier of the item
     * @returns a WorkbookChartRequestBuilder
     */
    WorkbookWorksheetRequestBuilder.prototype.chartsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookChartRequestBuilder_1.WorkbookChartRequestBuilder(this.currentPath + this.pathSegment + "/charts/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    WorkbookWorksheetRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    WorkbookWorksheetRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    WorkbookWorksheetRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    WorkbookWorksheetRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookWorksheet
     */
    WorkbookWorksheetRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, workbookWorksheet_1.WorkbookWorksheet, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.worksheets.names collection
     * @param id Unique identifier of the item
     * @returns a WorkbookNamedItemRequestBuilder
     */
    WorkbookWorksheetRequestBuilder.prototype.namesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookNamedItemRequestBuilder_1.WorkbookNamedItemRequestBuilder(this.currentPath + this.pathSegment + "/names/" + id, this.httpCore, false);
    };
    ;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    WorkbookWorksheetRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.worksheets.pivotTables collection
     * @param id Unique identifier of the item
     * @returns a WorkbookPivotTableRequestBuilder
     */
    WorkbookWorksheetRequestBuilder.prototype.pivotTablesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookPivotTableRequestBuilder_1.WorkbookPivotTableRequestBuilder(this.currentPath + this.pathSegment + "/pivotTables/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.worksheets.tables collection
     * @param id Unique identifier of the item
     * @returns a WorkbookTableRequestBuilder
     */
    WorkbookWorksheetRequestBuilder.prototype.tablesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookTableRequestBuilder_1.WorkbookTableRequestBuilder(this.currentPath + this.pathSegment + "/tables/" + id, this.httpCore, false);
    };
    ;
    return WorkbookWorksheetRequestBuilder;
}());
exports.WorkbookWorksheetRequestBuilder = WorkbookWorksheetRequestBuilder;
