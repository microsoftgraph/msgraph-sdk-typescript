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
exports.WorkbookRequestBuilder = void 0;
var applicationRequestBuilder_1 = require("./application/applicationRequestBuilder");
var commentsRequestBuilder_1 = require("./comments/commentsRequestBuilder");
var workbookCommentRequestBuilder_1 = require("./comments/item/workbookCommentRequestBuilder");
var functionsRequestBuilder_1 = require("./functions/functionsRequestBuilder");
var microsoft_graph_closeSessionRequestBuilder_1 = require("./microsoft/graph/closeSession/microsoft.graph.closeSessionRequestBuilder");
var workbookNamedItemRequestBuilder_1 = require("./names/item/workbookNamedItemRequestBuilder");
var namesRequestBuilder_1 = require("./names/namesRequestBuilder");
var workbookOperationRequestBuilder_1 = require("./operations/item/workbookOperationRequestBuilder");
var operationsRequestBuilder_1 = require("./operations/operationsRequestBuilder");
var workbookTableRequestBuilder_1 = require("./tables/item/workbookTableRequestBuilder");
var tablesRequestBuilder_1 = require("./tables/tablesRequestBuilder");
var workbook_1 = require("./workbook");
var workbookWorksheetRequestBuilder_1 = require("./worksheets/item/workbookWorksheetRequestBuilder");
var worksheetsRequestBuilder_1 = require("./worksheets/worksheetsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook  */
var WorkbookRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new WorkbookRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function WorkbookRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/workbook";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(WorkbookRequestBuilder.prototype, "application", {
        get: function () {
            return new applicationRequestBuilder_1.ApplicationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookRequestBuilder.prototype, "comments", {
        get: function () {
            return new commentsRequestBuilder_1.CommentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookRequestBuilder.prototype, "functions", {
        get: function () {
            return new functionsRequestBuilder_1.FunctionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    WorkbookRequestBuilder.prototype.closeSession = function () {
        return new microsoft_graph_closeSessionRequestBuilder_1.Microsoft.graph.closeSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    WorkbookRequestBuilder.prototype.createSession = function () {
        return new microsoft_graph_closeSessionRequestBuilder_1.Microsoft.graph.createSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    WorkbookRequestBuilder.prototype.refreshSession = function () {
        return new microsoft_graph_closeSessionRequestBuilder_1.Microsoft.graph.refreshSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(WorkbookRequestBuilder.prototype, "names", {
        get: function () {
            return new namesRequestBuilder_1.NamesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookRequestBuilder.prototype, "operations", {
        get: function () {
            return new operationsRequestBuilder_1.OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookRequestBuilder.prototype, "tables", {
        get: function () {
            return new tablesRequestBuilder_1.TablesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkbookRequestBuilder.prototype, "worksheets", {
        get: function () {
            return new worksheetsRequestBuilder_1.WorksheetsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.comments collection
     * @param id Unique identifier of the item
     * @returns a WorkbookCommentRequestBuilder
     */
    WorkbookRequestBuilder.prototype.commentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookCommentRequestBuilder_1.WorkbookCommentRequestBuilder(this.currentPath + this.pathSegment + "/comments/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    WorkbookRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    WorkbookRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    WorkbookRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    WorkbookRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Workbook
     */
    WorkbookRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, workbook_1.Workbook, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.names collection
     * @param id Unique identifier of the item
     * @returns a WorkbookNamedItemRequestBuilder
     */
    WorkbookRequestBuilder.prototype.namesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookNamedItemRequestBuilder_1.WorkbookNamedItemRequestBuilder(this.currentPath + this.pathSegment + "/names/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.operations collection
     * @param id Unique identifier of the item
     * @returns a WorkbookOperationRequestBuilder
     */
    WorkbookRequestBuilder.prototype.operationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookOperationRequestBuilder_1.WorkbookOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    ;
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    WorkbookRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.tables collection
     * @param id Unique identifier of the item
     * @returns a WorkbookTableRequestBuilder
     */
    WorkbookRequestBuilder.prototype.tablesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookTableRequestBuilder_1.WorkbookTableRequestBuilder(this.currentPath + this.pathSegment + "/tables/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.workbook.worksheets collection
     * @param id Unique identifier of the item
     * @returns a WorkbookWorksheetRequestBuilder
     */
    WorkbookRequestBuilder.prototype.worksheetsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new workbookWorksheetRequestBuilder_1.WorkbookWorksheetRequestBuilder(this.currentPath + this.pathSegment + "/worksheets/" + id, this.httpCore, false);
    };
    ;
    return WorkbookRequestBuilder;
}());
exports.WorkbookRequestBuilder = WorkbookRequestBuilder;
