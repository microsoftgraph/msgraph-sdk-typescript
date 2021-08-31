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
exports.ListRequestBuilder = void 0;
var list_1 = require("../../list");
var columnsRequestBuilder_1 = require("./columns/columnsRequestBuilder");
var columnDefinitionRequestBuilder_1 = require("./columns/item/columnDefinitionRequestBuilder");
var contentTypesRequestBuilder_1 = require("./contentTypes/contentTypesRequestBuilder");
var contentTypeRequestBuilder_1 = require("./contentTypes/item/contentTypeRequestBuilder");
var driveRequestBuilder_1 = require("./drive/driveRequestBuilder");
var listItemRequestBuilder_1 = require("./items/item/listItemRequestBuilder");
var itemsRequestBuilder_1 = require("./items/itemsRequestBuilder");
var subscriptionRequestBuilder_1 = require("./subscriptions/item/subscriptionRequestBuilder");
var subscriptionsRequestBuilder_1 = require("./subscriptions/subscriptionsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /drive/list  */
var ListRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ListRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ListRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/list";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(ListRequestBuilder.prototype, "columns", {
        get: function () {
            return new columnsRequestBuilder_1.ColumnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListRequestBuilder.prototype, "contentTypes", {
        get: function () {
            return new contentTypesRequestBuilder_1.ContentTypesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListRequestBuilder.prototype, "drive", {
        get: function () {
            return new driveRequestBuilder_1.DriveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListRequestBuilder.prototype, "items", {
        get: function () {
            return new itemsRequestBuilder_1.ItemsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListRequestBuilder.prototype, "subscriptions", {
        get: function () {
            return new subscriptionsRequestBuilder_1.SubscriptionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.drive.list.columns collection
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionRequestBuilder
     */
    ListRequestBuilder.prototype.columnsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new columnDefinitionRequestBuilder_1.ColumnDefinitionRequestBuilder(this.currentPath + this.pathSegment + "/columns/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Gets an item from the MicrosoftGraph.drive.list.contentTypes collection
     * @param id Unique identifier of the item
     * @returns a ContentTypeRequestBuilder
     */
    ListRequestBuilder.prototype.contentTypesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new contentTypeRequestBuilder_1.ContentTypeRequestBuilder(this.currentPath + this.pathSegment + "/contentTypes/" + id, this.httpCore, false);
    };
    ;
    /**
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ListRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ListRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ListRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ListRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of List
     */
    ListRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, list_1.List, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.drive.list.items collection
     * @param id Unique identifier of the item
     * @returns a ListItemRequestBuilder
     */
    ListRequestBuilder.prototype.itemsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new listItemRequestBuilder_1.ListItemRequestBuilder(this.currentPath + this.pathSegment + "/items/" + id, this.httpCore, false);
    };
    ;
    /**
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ListRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.drive.list.subscriptions collection
     * @param id Unique identifier of the item
     * @returns a SubscriptionRequestBuilder
     */
    ListRequestBuilder.prototype.subscriptionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new subscriptionRequestBuilder_1.SubscriptionRequestBuilder(this.currentPath + this.pathSegment + "/subscriptions/" + id, this.httpCore, false);
    };
    ;
    return ListRequestBuilder;
}());
exports.ListRequestBuilder = ListRequestBuilder;
