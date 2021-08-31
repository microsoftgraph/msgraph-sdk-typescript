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
exports.ManagedEBookRequestBuilder = void 0;
var managedEBook_1 = require("../../managedEBook");
var assignmentsRequestBuilder_1 = require("../assignments/assignmentsRequestBuilder");
var managedEBookAssignmentRequestBuilder_1 = require("../assignments/item/managedEBookAssignmentRequestBuilder");
var deviceStatesRequestBuilder_1 = require("../deviceStates/deviceStatesRequestBuilder");
var deviceInstallStateRequestBuilder_1 = require("../deviceStates/item/deviceInstallStateRequestBuilder");
var installSummaryRequestBuilder_1 = require("../installSummary/installSummaryRequestBuilder");
var microsoft_graph_assignRequestBuilder_1 = require("../microsoft/graph/assign/microsoft.graph.assignRequestBuilder");
var userInstallStateSummaryRequestBuilder_1 = require("../userStateSummary/item/userInstallStateSummaryRequestBuilder");
var userStateSummaryRequestBuilder_1 = require("../userStateSummary/userStateSummaryRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /deviceAppManagement/managedEBooks/{managedEBook-id}  */
var ManagedEBookRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ManagedEBookRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ManagedEBookRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(ManagedEBookRequestBuilder.prototype, "assignments", {
        get: function () {
            return new assignmentsRequestBuilder_1.AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedEBookRequestBuilder.prototype, "deviceStates", {
        get: function () {
            return new deviceStatesRequestBuilder_1.DeviceStatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedEBookRequestBuilder.prototype, "installSummary", {
        get: function () {
            return new installSummaryRequestBuilder_1.InstallSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedEBookRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    ManagedEBookRequestBuilder.prototype.assign = function () {
        return new microsoft_graph_assignRequestBuilder_1.Microsoft.graph.assignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(ManagedEBookRequestBuilder.prototype, "userStateSummary", {
        get: function () {
            return new userStateSummaryRequestBuilder_1.UserStateSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedEBooks.assignments collection
     * @param id Unique identifier of the item
     * @returns a ManagedEBookAssignmentRequestBuilder
     */
    ManagedEBookRequestBuilder.prototype.assignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedEBookAssignmentRequestBuilder_1.ManagedEBookAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * The Managed eBook.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ManagedEBookRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The Managed eBook.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ManagedEBookRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The Managed eBook.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ManagedEBookRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The Managed eBook.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ManagedEBookRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedEBooks.deviceStates collection
     * @param id Unique identifier of the item
     * @returns a DeviceInstallStateRequestBuilder
     */
    ManagedEBookRequestBuilder.prototype.deviceStatesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceInstallStateRequestBuilder_1.DeviceInstallStateRequestBuilder(this.currentPath + this.pathSegment + "/deviceStates/" + id, this.httpCore, false);
    };
    ;
    /**
     * The Managed eBook.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedEBook
     */
    ManagedEBookRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, managedEBook_1.ManagedEBook, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The Managed eBook.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ManagedEBookRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedEBooks.userStateSummary collection
     * @param id Unique identifier of the item
     * @returns a UserInstallStateSummaryRequestBuilder
     */
    ManagedEBookRequestBuilder.prototype.userStateSummaryById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new userInstallStateSummaryRequestBuilder_1.UserInstallStateSummaryRequestBuilder(this.currentPath + this.pathSegment + "/userStateSummary/" + id, this.httpCore, false);
    };
    ;
    return ManagedEBookRequestBuilder;
}());
exports.ManagedEBookRequestBuilder = ManagedEBookRequestBuilder;
