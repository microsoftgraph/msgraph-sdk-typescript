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
exports.WorkbookTableRequestBuilder = void 0;
var workbookTable_1 = require("../../../../workbookTable");
var columnsRequestBuilder_1 = require("../columns/columnsRequestBuilder");
var workbookTableColumnRequestBuilder_1 = require("../columns/item/workbookTableColumnRequestBuilder");
var microsoft_graph_clearFiltersRequestBuilder_1 = require("../microsoft/graph/clearFilters/microsoft.graph.clearFiltersRequestBuilder");
var workbookTableRowRequestBuilder_1 = require("../rows/item/workbookTableRowRequestBuilder");
var rowsRequestBuilder_1 = require("../rows/rowsRequestBuilder");
var sortRequestBuilder_1 = require("../sort/sortRequestBuilder");
var worksheetRequestBuilder_1 = require("../worksheet/worksheetRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}  */
var WorkbookTableRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new WorkbookTableRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function WorkbookTableRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(WorkbookTableRequestBuilder.prototype, "columns", {
        get: function () {
            return new columnsRequestBuilder_1.ColumnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookTableRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    WorkbookTableRequestBuilder.prototype.clearFilters = function () {
        return new microsoft_graph_clearFiltersRequestBuilder_1.Microsoft.graph.clearFiltersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    WorkbookTableRequestBuilder.prototype.convertToRange = function () {
        return new microsoft_graph_clearFiltersRequestBuilder_1.Microsoft.graph.convertToRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    WorkbookTableRequestBuilder.prototype.reapplyFilters = function () {
        return new microsoft_graph_clearFiltersRequestBuilder_1.Microsoft.graph.reapplyFiltersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(WorkbookTableRequestBuilder.prototype, "rows", {
        get: function () {
            return new rowsRequestBuilder_1.RowsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookTableRequestBuilder.prototype, "sort", {
        get: function () {
            return new sortRequestBuilder_1.SortRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookTableRequestBuilder.prototype, "worksheet", {
        get: function () {
            return new worksheetRequestBuilder_1.WorksheetRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.tables.columns collection
     * @param id Unique identifier of the item
     * @returns a WorkbookTableColumnRequestBuilder
     */
    WorkbookTableRequestBuilder.prototype.columnsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookTableColumnRequestBuilder_1.WorkbookTableColumnRequestBuilder(this.currentPath + this.pathSegment + "/columns/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    WorkbookTableRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    WorkbookTableRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    WorkbookTableRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    WorkbookTableRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookTable
     */
    WorkbookTableRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, workbookTable_1.WorkbookTable, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    WorkbookTableRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.tables.rows collection
     * @param id Unique identifier of the item
     * @returns a WorkbookTableRowRequestBuilder
     */
    WorkbookTableRequestBuilder.prototype.rowsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookTableRowRequestBuilder_1.WorkbookTableRowRequestBuilder(this.currentPath + this.pathSegment + "/rows/" + id, this.httpCore, false);
    };
    ;
    return WorkbookTableRequestBuilder;
}());
exports.WorkbookTableRequestBuilder = WorkbookTableRequestBuilder;
