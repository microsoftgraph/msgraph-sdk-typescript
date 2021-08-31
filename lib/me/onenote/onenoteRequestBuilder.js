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
exports.OnenoteRequestBuilder = void 0;
var onenote_1 = require("../../groups/onenote/onenote");
var notebookRequestBuilder_1 = require("./notebooks/item/notebookRequestBuilder");
var notebooksRequestBuilder_1 = require("./notebooks/notebooksRequestBuilder");
var onenoteOperationRequestBuilder_1 = require("./operations/item/onenoteOperationRequestBuilder");
var operationsRequestBuilder_1 = require("./operations/operationsRequestBuilder");
var onenotePageRequestBuilder_1 = require("./pages/item/onenotePageRequestBuilder");
var pagesRequestBuilder_1 = require("./pages/pagesRequestBuilder");
var onenoteResourceRequestBuilder_1 = require("./resources/item/onenoteResourceRequestBuilder");
var resourcesRequestBuilder_1 = require("./resources/resourcesRequestBuilder");
var sectionGroupRequestBuilder_1 = require("./sectionGroups/item/sectionGroupRequestBuilder");
var sectionGroupsRequestBuilder_1 = require("./sectionGroups/sectionGroupsRequestBuilder");
var onenoteSectionRequestBuilder_1 = require("./sections/item/onenoteSectionRequestBuilder");
var sectionsRequestBuilder_1 = require("./sections/sectionsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me/onenote  */
var OnenoteRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new OnenoteRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function OnenoteRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/onenote";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(OnenoteRequestBuilder.prototype, "notebooks", {
        get: function () {
            return new notebooksRequestBuilder_1.NotebooksRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnenoteRequestBuilder.prototype, "operations", {
        get: function () {
            return new operationsRequestBuilder_1.OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnenoteRequestBuilder.prototype, "pages", {
        get: function () {
            return new pagesRequestBuilder_1.PagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnenoteRequestBuilder.prototype, "resources", {
        get: function () {
            return new resourcesRequestBuilder_1.ResourcesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnenoteRequestBuilder.prototype, "sectionGroups", {
        get: function () {
            return new sectionGroupsRequestBuilder_1.SectionGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnenoteRequestBuilder.prototype, "sections", {
        get: function () {
            return new sectionsRequestBuilder_1.SectionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    OnenoteRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    OnenoteRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    OnenoteRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    OnenoteRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Onenote
     */
    OnenoteRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, onenote_1.Onenote, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.onenote.notebooks collection
     * @param id Unique identifier of the item
     * @returns a NotebookRequestBuilder
     */
    OnenoteRequestBuilder.prototype.notebooksById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new notebookRequestBuilder_1.NotebookRequestBuilder(this.currentPath + this.pathSegment + "/notebooks/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.onenote.operations collection
     * @param id Unique identifier of the item
     * @returns a OnenoteOperationRequestBuilder
     */
    OnenoteRequestBuilder.prototype.operationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new onenoteOperationRequestBuilder_1.OnenoteOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.onenote.pages collection
     * @param id Unique identifier of the item
     * @returns a OnenotePageRequestBuilder
     */
    OnenoteRequestBuilder.prototype.pagesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new onenotePageRequestBuilder_1.OnenotePageRequestBuilder(this.currentPath + this.pathSegment + "/pages/" + id, this.httpCore, false);
    };
    ;
    /**
     * Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    OnenoteRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.onenote.resources collection
     * @param id Unique identifier of the item
     * @returns a OnenoteResourceRequestBuilder
     */
    OnenoteRequestBuilder.prototype.resourcesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new onenoteResourceRequestBuilder_1.OnenoteResourceRequestBuilder(this.currentPath + this.pathSegment + "/resources/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.onenote.sectionGroups collection
     * @param id Unique identifier of the item
     * @returns a SectionGroupRequestBuilder
     */
    OnenoteRequestBuilder.prototype.sectionGroupsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new sectionGroupRequestBuilder_1.SectionGroupRequestBuilder(this.currentPath + this.pathSegment + "/sectionGroups/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.onenote.sections collection
     * @param id Unique identifier of the item
     * @returns a OnenoteSectionRequestBuilder
     */
    OnenoteRequestBuilder.prototype.sectionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new onenoteSectionRequestBuilder_1.OnenoteSectionRequestBuilder(this.currentPath + this.pathSegment + "/sections/" + id, this.httpCore, false);
    };
    ;
    return OnenoteRequestBuilder;
}());
exports.OnenoteRequestBuilder = OnenoteRequestBuilder;
