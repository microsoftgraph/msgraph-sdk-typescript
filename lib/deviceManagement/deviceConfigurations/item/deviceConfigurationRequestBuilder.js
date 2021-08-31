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
exports.DeviceConfigurationRequestBuilder = void 0;
var deviceConfiguration_1 = require("../../deviceConfiguration");
var assignmentsRequestBuilder_1 = require("../assignments/assignmentsRequestBuilder");
var deviceConfigurationAssignmentRequestBuilder_1 = require("../assignments/item/deviceConfigurationAssignmentRequestBuilder");
var deviceSettingStateSummariesRequestBuilder_1 = require("../deviceSettingStateSummaries/deviceSettingStateSummariesRequestBuilder");
var settingStateDeviceSummaryRequestBuilder_1 = require("../deviceSettingStateSummaries/item/settingStateDeviceSummaryRequestBuilder");
var deviceStatusesRequestBuilder_1 = require("../deviceStatuses/deviceStatusesRequestBuilder");
var deviceConfigurationDeviceStatusRequestBuilder_1 = require("../deviceStatuses/item/deviceConfigurationDeviceStatusRequestBuilder");
var deviceStatusOverviewRequestBuilder_1 = require("../deviceStatusOverview/deviceStatusOverviewRequestBuilder");
var microsoft_graph_assignRequestBuilder_1 = require("../microsoft/graph/assign/microsoft.graph.assignRequestBuilder");
var deviceConfigurationUserStatusRequestBuilder_1 = require("../userStatuses/item/deviceConfigurationUserStatusRequestBuilder");
var userStatusesRequestBuilder_1 = require("../userStatuses/userStatusesRequestBuilder");
var userStatusOverviewRequestBuilder_1 = require("../userStatusOverview/userStatusOverviewRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /deviceManagement/deviceConfigurations/{deviceConfiguration-id}  */
var DeviceConfigurationRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new DeviceConfigurationRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function DeviceConfigurationRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(DeviceConfigurationRequestBuilder.prototype, "assignments", {
        get: function () {
            return new assignmentsRequestBuilder_1.AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceConfigurationRequestBuilder.prototype, "deviceSettingStateSummaries", {
        get: function () {
            return new deviceSettingStateSummariesRequestBuilder_1.DeviceSettingStateSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceConfigurationRequestBuilder.prototype, "deviceStatuses", {
        get: function () {
            return new deviceStatusesRequestBuilder_1.DeviceStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceConfigurationRequestBuilder.prototype, "deviceStatusOverview", {
        get: function () {
            return new deviceStatusOverviewRequestBuilder_1.DeviceStatusOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceConfigurationRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    DeviceConfigurationRequestBuilder.prototype.assign = function () {
        return new microsoft_graph_assignRequestBuilder_1.Microsoft.graph.assignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(DeviceConfigurationRequestBuilder.prototype, "userStatuses", {
        get: function () {
            return new userStatusesRequestBuilder_1.UserStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceConfigurationRequestBuilder.prototype, "userStatusOverview", {
        get: function () {
            return new userStatusOverviewRequestBuilder_1.UserStatusOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.assignments collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationAssignmentRequestBuilder
     */
    DeviceConfigurationRequestBuilder.prototype.assignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceConfigurationAssignmentRequestBuilder_1.DeviceConfigurationAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * The device configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DeviceConfigurationRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The device configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    DeviceConfigurationRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The device configurations.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DeviceConfigurationRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The device configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DeviceConfigurationRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.deviceSettingStateSummaries collection
     * @param id Unique identifier of the item
     * @returns a SettingStateDeviceSummaryRequestBuilder
     */
    DeviceConfigurationRequestBuilder.prototype.deviceSettingStateSummariesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new settingStateDeviceSummaryRequestBuilder_1.SettingStateDeviceSummaryRequestBuilder(this.currentPath + this.pathSegment + "/deviceSettingStateSummaries/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.deviceStatuses collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationDeviceStatusRequestBuilder
     */
    DeviceConfigurationRequestBuilder.prototype.deviceStatusesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceConfigurationDeviceStatusRequestBuilder_1.DeviceConfigurationDeviceStatusRequestBuilder(this.currentPath + this.pathSegment + "/deviceStatuses/" + id, this.httpCore, false);
    };
    ;
    /**
     * The device configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfiguration
     */
    DeviceConfigurationRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deviceConfiguration_1.DeviceConfiguration, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The device configurations.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DeviceConfigurationRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.userStatuses collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationUserStatusRequestBuilder
     */
    DeviceConfigurationRequestBuilder.prototype.userStatusesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceConfigurationUserStatusRequestBuilder_1.DeviceConfigurationUserStatusRequestBuilder(this.currentPath + this.pathSegment + "/userStatuses/" + id, this.httpCore, false);
    };
    ;
    return DeviceConfigurationRequestBuilder;
}());
exports.DeviceConfigurationRequestBuilder = DeviceConfigurationRequestBuilder;
