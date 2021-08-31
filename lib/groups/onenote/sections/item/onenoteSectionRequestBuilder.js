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
exports.OnenoteSectionRequestBuilder = void 0;
var onenoteSection_1 = require("../../../../onenoteSection");
var microsoft_graph_copyToNotebookRequestBuilder_1 = require("../microsoft/graph/copyToNotebook/microsoft.graph.copyToNotebookRequestBuilder");
var onenotePageRequestBuilder_1 = require("../pages/item/onenotePageRequestBuilder");
var pagesRequestBuilder_1 = require("../pages/pagesRequestBuilder");
var parentNotebookRequestBuilder_1 = require("../parentNotebook/parentNotebookRequestBuilder");
var parentSectionGroupRequestBuilder_1 = require("../parentSectionGroup/parentSectionGroupRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /groups/{group-id}/onenote/sections/{onenoteSection-id}  */
var OnenoteSectionRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new OnenoteSectionRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function OnenoteSectionRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(OnenoteSectionRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    OnenoteSectionRequestBuilder.prototype.copyToNotebook = function () {
        return new microsoft_graph_copyToNotebookRequestBuilder_1.Microsoft.graph.copyToNotebookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    OnenoteSectionRequestBuilder.prototype.copyToSectionGroup = function () {
        return new microsoft_graph_copyToNotebookRequestBuilder_1.Microsoft.graph.copyToSectionGroupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(OnenoteSectionRequestBuilder.prototype, "pages", {
        get: function () {
            return new pagesRequestBuilder_1.PagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnenoteSectionRequestBuilder.prototype, "parentNotebook", {
        get: function () {
            return new parentNotebookRequestBuilder_1.ParentNotebookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnenoteSectionRequestBuilder.prototype, "parentSectionGroup", {
        get: function () {
            return new parentSectionGroupRequestBuilder_1.ParentSectionGroupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    OnenoteSectionRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    OnenoteSectionRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    OnenoteSectionRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    OnenoteSectionRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnenoteSection
     */
    OnenoteSectionRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, onenoteSection_1.OnenoteSection, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.onenote.sections.pages collection
     * @param id Unique identifier of the item
     * @returns a OnenotePageRequestBuilder
     */
    OnenoteSectionRequestBuilder.prototype.pagesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new onenotePageRequestBuilder_1.OnenotePageRequestBuilder(this.currentPath + this.pathSegment + "/pages/" + id, this.httpCore, false);
    };
    ;
    /**
     * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    OnenoteSectionRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return OnenoteSectionRequestBuilder;
}());
exports.OnenoteSectionRequestBuilder = OnenoteSectionRequestBuilder;
