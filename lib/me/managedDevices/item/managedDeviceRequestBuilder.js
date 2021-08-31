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
exports.ManagedDeviceRequestBuilder = void 0;
var managedDevice_1 = require("../../../managedDevice");
var deviceCategoryRequestBuilder_1 = require("../deviceCategory/deviceCategoryRequestBuilder");
var deviceCompliancePolicyStatesRequestBuilder_1 = require("../deviceCompliancePolicyStates/deviceCompliancePolicyStatesRequestBuilder");
var deviceCompliancePolicyStateRequestBuilder_1 = require("../deviceCompliancePolicyStates/item/deviceCompliancePolicyStateRequestBuilder");
var deviceConfigurationStatesRequestBuilder_1 = require("../deviceConfigurationStates/deviceConfigurationStatesRequestBuilder");
var deviceConfigurationStateRequestBuilder_1 = require("../deviceConfigurationStates/item/deviceConfigurationStateRequestBuilder");
var microsoft_graph_bypassActivationLockRequestBuilder_1 = require("../microsoft/graph/bypassActivationLock/microsoft.graph.bypassActivationLockRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me/managedDevices/{managedDevice-id}  */
var ManagedDeviceRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ManagedDeviceRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ManagedDeviceRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(ManagedDeviceRequestBuilder.prototype, "deviceCategory", {
        get: function () {
            return new deviceCategoryRequestBuilder_1.DeviceCategoryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedDeviceRequestBuilder.prototype, "deviceCompliancePolicyStates", {
        get: function () {
            return new deviceCompliancePolicyStatesRequestBuilder_1.DeviceCompliancePolicyStatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedDeviceRequestBuilder.prototype, "deviceConfigurationStates", {
        get: function () {
            return new deviceConfigurationStatesRequestBuilder_1.DeviceConfigurationStatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedDeviceRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    ManagedDeviceRequestBuilder.prototype.bypassActivationLock = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.bypassActivationLockRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.cleanWindowsDevice = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.cleanWindowsDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.deleteUserFromSharedAppleDevice = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.deleteUserFromSharedAppleDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.disableLostMode = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.disableLostModeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.locateDevice = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.locateDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.logoutSharedAppleDeviceActiveUser = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.logoutSharedAppleDeviceActiveUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.rebootNow = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.rebootNowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.recoverPasscode = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.recoverPasscodeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.remoteLock = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.remoteLockRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.requestRemoteAssistance = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.requestRemoteAssistanceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.resetPasscode = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.resetPasscodeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.retire = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.retireRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.shutDown = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.shutDownRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.syncDevice = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.syncDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.updateWindowsDeviceAccount = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.updateWindowsDeviceAccountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.windowsDefenderScan = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.windowsDefenderScanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.windowsDefenderUpdateSignatures = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.windowsDefenderUpdateSignaturesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ManagedDeviceRequestBuilder.prototype.wipe = function () {
        return new microsoft_graph_bypassActivationLockRequestBuilder_1.Microsoft.graph.wipeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ;
    /**
     * The managed devices associated with the user.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ManagedDeviceRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The managed devices associated with the user.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ManagedDeviceRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The managed devices associated with the user.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ManagedDeviceRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The managed devices associated with the user.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ManagedDeviceRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.managedDevices.deviceCompliancePolicyStates collection
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicyStateRequestBuilder
     */
    ManagedDeviceRequestBuilder.prototype.deviceCompliancePolicyStatesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceCompliancePolicyStateRequestBuilder_1.DeviceCompliancePolicyStateRequestBuilder(this.currentPath + this.pathSegment + "/deviceCompliancePolicyStates/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.managedDevices.deviceConfigurationStates collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationStateRequestBuilder
     */
    ManagedDeviceRequestBuilder.prototype.deviceConfigurationStatesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceConfigurationStateRequestBuilder_1.DeviceConfigurationStateRequestBuilder(this.currentPath + this.pathSegment + "/deviceConfigurationStates/" + id, this.httpCore, false);
    };
    ;
    /**
     * The managed devices associated with the user.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDevice
     */
    ManagedDeviceRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, managedDevice_1.ManagedDevice, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The managed devices associated with the user.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ManagedDeviceRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return ManagedDeviceRequestBuilder;
}());
exports.ManagedDeviceRequestBuilder = ManagedDeviceRequestBuilder;
