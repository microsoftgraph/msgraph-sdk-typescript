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
exports.DeviceRequestBuilder = void 0;
var device_1 = require("../../device");
var extensionsRequestBuilder_1 = require("../extensions/extensionsRequestBuilder");
var extensionRequestBuilder_1 = require("../extensions/item/extensionRequestBuilder");
var memberOfRequestBuilder_1 = require("../memberOf/memberOfRequestBuilder");
var microsoft_graph_checkMemberGroupsRequestBuilder_1 = require("../microsoft/graph/checkMemberGroups/microsoft.graph.checkMemberGroupsRequestBuilder");
var registeredOwnersRequestBuilder_1 = require("../registeredOwners/registeredOwnersRequestBuilder");
var registeredUsersRequestBuilder_1 = require("../registeredUsers/registeredUsersRequestBuilder");
var transitiveMemberOfRequestBuilder_1 = require("../transitiveMemberOf/transitiveMemberOfRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /devices/{device-id}  */
var DeviceRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new DeviceRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function DeviceRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(DeviceRequestBuilder.prototype, "extensions", {
        get: function () {
            return new extensionsRequestBuilder_1.ExtensionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceRequestBuilder.prototype, "memberOf", {
        get: function () {
            return new memberOfRequestBuilder_1.MemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    DeviceRequestBuilder.prototype.checkMemberGroups = function () {
        return new microsoft_graph_checkMemberGroupsRequestBuilder_1.Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DeviceRequestBuilder.prototype.checkMemberObjects = function () {
        return new microsoft_graph_checkMemberGroupsRequestBuilder_1.Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DeviceRequestBuilder.prototype.getMemberGroups = function () {
        return new microsoft_graph_checkMemberGroupsRequestBuilder_1.Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DeviceRequestBuilder.prototype.getMemberObjects = function () {
        return new microsoft_graph_checkMemberGroupsRequestBuilder_1.Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DeviceRequestBuilder.prototype.restore = function () {
        return new microsoft_graph_checkMemberGroupsRequestBuilder_1.Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(DeviceRequestBuilder.prototype, "registeredOwners", {
        get: function () {
            return new registeredOwnersRequestBuilder_1.RegisteredOwnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceRequestBuilder.prototype, "registeredUsers", {
        get: function () {
            return new registeredUsersRequestBuilder_1.RegisteredUsersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceRequestBuilder.prototype, "transitiveMemberOf", {
        get: function () {
            return new transitiveMemberOfRequestBuilder_1.TransitiveMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DeviceRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    DeviceRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DeviceRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DeviceRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.devices.extensions collection
     * @param id Unique identifier of the item
     * @returns a ExtensionRequestBuilder
     */
    DeviceRequestBuilder.prototype.extensionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new extensionRequestBuilder_1.ExtensionRequestBuilder(this.currentPath + this.pathSegment + "/extensions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Device
     */
    DeviceRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, device_1.Device, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DeviceRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return DeviceRequestBuilder;
}());
exports.DeviceRequestBuilder = DeviceRequestBuilder;
