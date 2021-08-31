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
exports.ManagedDeviceMobileAppConfigurationRequestBuilder = void 0;
var managedDeviceMobileAppConfiguration_1 = require("../../managedDeviceMobileAppConfiguration");
var assignmentsRequestBuilder_1 = require("../assignments/assignmentsRequestBuilder");
var managedDeviceMobileAppConfigurationAssignmentRequestBuilder_1 = require("../assignments/item/managedDeviceMobileAppConfigurationAssignmentRequestBuilder");
var deviceStatusesRequestBuilder_1 = require("../deviceStatuses/deviceStatusesRequestBuilder");
var managedDeviceMobileAppConfigurationDeviceStatusRequestBuilder_1 = require("../deviceStatuses/item/managedDeviceMobileAppConfigurationDeviceStatusRequestBuilder");
var deviceStatusSummaryRequestBuilder_1 = require("../deviceStatusSummary/deviceStatusSummaryRequestBuilder");
var microsoft_graph_assignRequestBuilder_1 = require("../microsoft/graph/assign/microsoft.graph.assignRequestBuilder");
var managedDeviceMobileAppConfigurationUserStatusRequestBuilder_1 = require("../userStatuses/item/managedDeviceMobileAppConfigurationUserStatusRequestBuilder");
var userStatusesRequestBuilder_1 = require("../userStatuses/userStatusesRequestBuilder");
var userStatusSummaryRequestBuilder_1 = require("../userStatusSummary/userStatusSummaryRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}  */
var ManagedDeviceMobileAppConfigurationRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ManagedDeviceMobileAppConfigurationRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(ManagedDeviceMobileAppConfigurationRequestBuilder.prototype, "assignments", {
        get: function () {
            return new assignmentsRequestBuilder_1.AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedDeviceMobileAppConfigurationRequestBuilder.prototype, "deviceStatuses", {
        get: function () {
            return new deviceStatusesRequestBuilder_1.DeviceStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedDeviceMobileAppConfigurationRequestBuilder.prototype, "deviceStatusSummary", {
        get: function () {
            return new deviceStatusSummaryRequestBuilder_1.DeviceStatusSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedDeviceMobileAppConfigurationRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.assign = function () {
        return new microsoft_graph_assignRequestBuilder_1.Microsoft.graph.assignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(ManagedDeviceMobileAppConfigurationRequestBuilder.prototype, "userStatuses", {
        get: function () {
            return new userStatusesRequestBuilder_1.UserStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedDeviceMobileAppConfigurationRequestBuilder.prototype, "userStatusSummary", {
        get: function () {
            return new userStatusSummaryRequestBuilder_1.UserStatusSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppConfigurations.assignments collection
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationAssignmentRequestBuilder
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.assignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedDeviceMobileAppConfigurationAssignmentRequestBuilder_1.ManagedDeviceMobileAppConfigurationAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The Managed Device Mobile Application Configurations.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppConfigurations.deviceStatuses collection
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationDeviceStatusRequestBuilder
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.deviceStatusesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedDeviceMobileAppConfigurationDeviceStatusRequestBuilder_1.ManagedDeviceMobileAppConfigurationDeviceStatusRequestBuilder(this.currentPath + this.pathSegment + "/deviceStatuses/" + id, this.httpCore, false);
    };
    ;
    /**
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfiguration
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, managedDeviceMobileAppConfiguration_1.ManagedDeviceMobileAppConfiguration, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The Managed Device Mobile Application Configurations.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppConfigurations.userStatuses collection
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationUserStatusRequestBuilder
     */
    ManagedDeviceMobileAppConfigurationRequestBuilder.prototype.userStatusesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedDeviceMobileAppConfigurationUserStatusRequestBuilder_1.ManagedDeviceMobileAppConfigurationUserStatusRequestBuilder(this.currentPath + this.pathSegment + "/userStatuses/" + id, this.httpCore, false);
    };
    ;
    return ManagedDeviceMobileAppConfigurationRequestBuilder;
}());
exports.ManagedDeviceMobileAppConfigurationRequestBuilder = ManagedDeviceMobileAppConfigurationRequestBuilder;
