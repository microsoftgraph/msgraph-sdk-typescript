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
exports.DriveItemRequestBuilder = void 0;
var driveItem_1 = require("../../driveItem");
var analyticsRequestBuilder_1 = require("../analytics/analyticsRequestBuilder");
var childrenRequestBuilder_1 = require("../children/childrenRequestBuilder");
var contentRequestBuilder_1 = require("../content/contentRequestBuilder");
var listItemRequestBuilder_1 = require("../listItem/listItemRequestBuilder");
var microsoft_graph_checkinRequestBuilder_1 = require("../microsoft/graph/checkin/microsoft.graph.checkinRequestBuilder");
var permissionRequestBuilder_1 = require("../permissions/item/permissionRequestBuilder");
var permissionsRequestBuilder_1 = require("../permissions/permissionsRequestBuilder");
var subscriptionRequestBuilder_1 = require("../subscriptions/item/subscriptionRequestBuilder");
var subscriptionsRequestBuilder_1 = require("../subscriptions/subscriptionsRequestBuilder");
var thumbnailSetRequestBuilder_1 = require("../thumbnails/item/thumbnailSetRequestBuilder");
var thumbnailsRequestBuilder_1 = require("../thumbnails/thumbnailsRequestBuilder");
var driveItemVersionRequestBuilder_1 = require("../versions/item/driveItemVersionRequestBuilder");
var versionsRequestBuilder_1 = require("../versions/versionsRequestBuilder");
var workbookRequestBuilder_1 = require("../workbook/workbookRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /workbooks/{driveItem-id}  */
var DriveItemRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new DriveItemRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function DriveItemRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(DriveItemRequestBuilder.prototype, "analytics", {
        get: function () {
            return new analyticsRequestBuilder_1.AnalyticsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "children", {
        get: function () {
            return new childrenRequestBuilder_1.ChildrenRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "content", {
        get: function () {
            return new contentRequestBuilder_1.ContentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "listItem", {
        get: function () {
            return new listItemRequestBuilder_1.ListItemRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    DriveItemRequestBuilder.prototype.checkin = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.checkinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.checkout = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.checkoutRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.copy = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.copyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.createLink = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.createLinkRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.createUploadSession = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.createUploadSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.follow = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.followRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.invite = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.inviteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.preview = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.previewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.restore = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.unfollow = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.unfollowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DriveItemRequestBuilder.prototype.validatePermission = function () {
        return new microsoft_graph_checkinRequestBuilder_1.Microsoft.graph.validatePermissionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(DriveItemRequestBuilder.prototype, "permissions", {
        get: function () {
            return new permissionsRequestBuilder_1.PermissionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "subscriptions", {
        get: function () {
            return new subscriptionsRequestBuilder_1.SubscriptionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "thumbnails", {
        get: function () {
            return new thumbnailsRequestBuilder_1.ThumbnailsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "versions", {
        get: function () {
            return new versionsRequestBuilder_1.VersionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "workbook", {
        get: function () {
            return new workbookRequestBuilder_1.WorkbookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.workbooks.children collection
     * @param id Unique identifier of the item
     * @returns a DriveItemRequestBuilder
     */
    DriveItemRequestBuilder.prototype.childrenById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new DriveItemRequestBuilder(this.currentPath + this.pathSegment + "/children/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Delete entity from workbooks
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DriveItemRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get entity from workbooks by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    DriveItemRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update entity in workbooks
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DriveItemRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Delete entity from workbooks
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DriveItemRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Get entity from workbooks by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DriveItem
     */
    DriveItemRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, driveItem_1.DriveItem, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Update entity in workbooks
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DriveItemRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.permissions collection
     * @param id Unique identifier of the item
     * @returns a PermissionRequestBuilder
     */
    DriveItemRequestBuilder.prototype.permissionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new permissionRequestBuilder_1.PermissionRequestBuilder(this.currentPath + this.pathSegment + "/permissions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.subscriptions collection
     * @param id Unique identifier of the item
     * @returns a SubscriptionRequestBuilder
     */
    DriveItemRequestBuilder.prototype.subscriptionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new subscriptionRequestBuilder_1.SubscriptionRequestBuilder(this.currentPath + this.pathSegment + "/subscriptions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.thumbnails collection
     * @param id Unique identifier of the item
     * @returns a ThumbnailSetRequestBuilder
     */
    DriveItemRequestBuilder.prototype.thumbnailsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new thumbnailSetRequestBuilder_1.ThumbnailSetRequestBuilder(this.currentPath + this.pathSegment + "/thumbnails/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks.versions collection
     * @param id Unique identifier of the item
     * @returns a DriveItemVersionRequestBuilder
     */
    DriveItemRequestBuilder.prototype.versionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new driveItemVersionRequestBuilder_1.DriveItemVersionRequestBuilder(this.currentPath + this.pathSegment + "/versions/" + id, this.httpCore, false);
    };
    ;
    return DriveItemRequestBuilder;
}());
exports.DriveItemRequestBuilder = DriveItemRequestBuilder;
