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
exports.DeviceCompliancePolicyRequestBuilder = void 0;
var deviceCompliancePolicy_1 = require("../../deviceCompliancePolicy");
var assignmentsRequestBuilder_1 = require("../assignments/assignmentsRequestBuilder");
var deviceCompliancePolicyAssignmentRequestBuilder_1 = require("../assignments/item/deviceCompliancePolicyAssignmentRequestBuilder");
var deviceSettingStateSummariesRequestBuilder_1 = require("../deviceSettingStateSummaries/deviceSettingStateSummariesRequestBuilder");
var settingStateDeviceSummaryRequestBuilder_1 = require("../deviceSettingStateSummaries/item/settingStateDeviceSummaryRequestBuilder");
var deviceStatusesRequestBuilder_1 = require("../deviceStatuses/deviceStatusesRequestBuilder");
var deviceComplianceDeviceStatusRequestBuilder_1 = require("../deviceStatuses/item/deviceComplianceDeviceStatusRequestBuilder");
var deviceStatusOverviewRequestBuilder_1 = require("../deviceStatusOverview/deviceStatusOverviewRequestBuilder");
var microsoft_graph_assignRequestBuilder_1 = require("../microsoft/graph/assign/microsoft.graph.assignRequestBuilder");
var deviceComplianceScheduledActionForRuleRequestBuilder_1 = require("../scheduledActionsForRule/item/deviceComplianceScheduledActionForRuleRequestBuilder");
var scheduledActionsForRuleRequestBuilder_1 = require("../scheduledActionsForRule/scheduledActionsForRuleRequestBuilder");
var deviceComplianceUserStatusRequestBuilder_1 = require("../userStatuses/item/deviceComplianceUserStatusRequestBuilder");
var userStatusesRequestBuilder_1 = require("../userStatuses/userStatusesRequestBuilder");
var userStatusOverviewRequestBuilder_1 = require("../userStatusOverview/userStatusOverviewRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}  */
var DeviceCompliancePolicyRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new DeviceCompliancePolicyRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function DeviceCompliancePolicyRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(DeviceCompliancePolicyRequestBuilder.prototype, "assignments", {
        get: function () {
            return new assignmentsRequestBuilder_1.AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceCompliancePolicyRequestBuilder.prototype, "deviceSettingStateSummaries", {
        get: function () {
            return new deviceSettingStateSummariesRequestBuilder_1.DeviceSettingStateSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceCompliancePolicyRequestBuilder.prototype, "deviceStatuses", {
        get: function () {
            return new deviceStatusesRequestBuilder_1.DeviceStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceCompliancePolicyRequestBuilder.prototype, "deviceStatusOverview", {
        get: function () {
            return new deviceStatusOverviewRequestBuilder_1.DeviceStatusOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceCompliancePolicyRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    DeviceCompliancePolicyRequestBuilder.prototype.assign = function () {
        return new microsoft_graph_assignRequestBuilder_1.Microsoft.graph.assignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    DeviceCompliancePolicyRequestBuilder.prototype.scheduleActionsForRules = function () {
        return new microsoft_graph_assignRequestBuilder_1.Microsoft.graph.scheduleActionsForRulesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(DeviceCompliancePolicyRequestBuilder.prototype, "scheduledActionsForRule", {
        get: function () {
            return new scheduledActionsForRuleRequestBuilder_1.ScheduledActionsForRuleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceCompliancePolicyRequestBuilder.prototype, "userStatuses", {
        get: function () {
            return new userStatusesRequestBuilder_1.UserStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceCompliancePolicyRequestBuilder.prototype, "userStatusOverview", {
        get: function () {
            return new userStatusOverviewRequestBuilder_1.UserStatusOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicies.assignments collection
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicyAssignmentRequestBuilder
     */
    DeviceCompliancePolicyRequestBuilder.prototype.assignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceCompliancePolicyAssignmentRequestBuilder_1.DeviceCompliancePolicyAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DeviceCompliancePolicyRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    DeviceCompliancePolicyRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The device compliance policies.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DeviceCompliancePolicyRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DeviceCompliancePolicyRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicies.deviceSettingStateSummaries collection
     * @param id Unique identifier of the item
     * @returns a SettingStateDeviceSummaryRequestBuilder
     */
    DeviceCompliancePolicyRequestBuilder.prototype.deviceSettingStateSummariesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new settingStateDeviceSummaryRequestBuilder_1.SettingStateDeviceSummaryRequestBuilder(this.currentPath + this.pathSegment + "/deviceSettingStateSummaries/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicies.deviceStatuses collection
     * @param id Unique identifier of the item
     * @returns a DeviceComplianceDeviceStatusRequestBuilder
     */
    DeviceCompliancePolicyRequestBuilder.prototype.deviceStatusesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceComplianceDeviceStatusRequestBuilder_1.DeviceComplianceDeviceStatusRequestBuilder(this.currentPath + this.pathSegment + "/deviceStatuses/" + id, this.httpCore, false);
    };
    ;
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceCompliancePolicy
     */
    DeviceCompliancePolicyRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deviceCompliancePolicy_1.DeviceCompliancePolicy, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The device compliance policies.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DeviceCompliancePolicyRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicies.scheduledActionsForRule collection
     * @param id Unique identifier of the item
     * @returns a DeviceComplianceScheduledActionForRuleRequestBuilder
     */
    DeviceCompliancePolicyRequestBuilder.prototype.scheduledActionsForRuleById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceComplianceScheduledActionForRuleRequestBuilder_1.DeviceComplianceScheduledActionForRuleRequestBuilder(this.currentPath + this.pathSegment + "/scheduledActionsForRule/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicies.userStatuses collection
     * @param id Unique identifier of the item
     * @returns a DeviceComplianceUserStatusRequestBuilder
     */
    DeviceCompliancePolicyRequestBuilder.prototype.userStatusesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceComplianceUserStatusRequestBuilder_1.DeviceComplianceUserStatusRequestBuilder(this.currentPath + this.pathSegment + "/userStatuses/" + id, this.httpCore, false);
    };
    ;
    return DeviceCompliancePolicyRequestBuilder;
}());
exports.DeviceCompliancePolicyRequestBuilder = DeviceCompliancePolicyRequestBuilder;
