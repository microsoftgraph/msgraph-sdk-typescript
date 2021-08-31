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
exports.ScheduleRequestBuilder = void 0;
var microsoft_graph_shareRequestBuilder_1 = require("./microsoft/graph/share/microsoft.graph.shareRequestBuilder");
var offerShiftRequestRequestBuilder_1 = require("./offerShiftRequests/item/offerShiftRequestRequestBuilder");
var offerShiftRequestsRequestBuilder_1 = require("./offerShiftRequests/offerShiftRequestsRequestBuilder");
var openShiftChangeRequestRequestBuilder_1 = require("./openShiftChangeRequests/item/openShiftChangeRequestRequestBuilder");
var openShiftChangeRequestsRequestBuilder_1 = require("./openShiftChangeRequests/openShiftChangeRequestsRequestBuilder");
var openShiftRequestBuilder_1 = require("./openShifts/item/openShiftRequestBuilder");
var openShiftsRequestBuilder_1 = require("./openShifts/openShiftsRequestBuilder");
var schedule_1 = require("./schedule");
var schedulingGroupRequestBuilder_1 = require("./schedulingGroups/item/schedulingGroupRequestBuilder");
var schedulingGroupsRequestBuilder_1 = require("./schedulingGroups/schedulingGroupsRequestBuilder");
var shiftRequestBuilder_1 = require("./shifts/item/shiftRequestBuilder");
var shiftsRequestBuilder_1 = require("./shifts/shiftsRequestBuilder");
var swapShiftsChangeRequestRequestBuilder_1 = require("./swapShiftsChangeRequests/item/swapShiftsChangeRequestRequestBuilder");
var swapShiftsChangeRequestsRequestBuilder_1 = require("./swapShiftsChangeRequests/swapShiftsChangeRequestsRequestBuilder");
var timeOffReasonRequestBuilder_1 = require("./timeOffReasons/item/timeOffReasonRequestBuilder");
var timeOffReasonsRequestBuilder_1 = require("./timeOffReasons/timeOffReasonsRequestBuilder");
var timeOffRequestRequestBuilder_1 = require("./timeOffRequests/item/timeOffRequestRequestBuilder");
var timeOffRequestsRequestBuilder_1 = require("./timeOffRequests/timeOffRequestsRequestBuilder");
var timeOffRequestBuilder_1 = require("./timesOff/item/timeOffRequestBuilder");
var timesOffRequestBuilder_1 = require("./timesOff/timesOffRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /teams/{team-id}/schedule  */
var ScheduleRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ScheduleRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ScheduleRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/schedule";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(ScheduleRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    ScheduleRequestBuilder.prototype.share = function () {
        return new microsoft_graph_shareRequestBuilder_1.Microsoft.graph.shareRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(ScheduleRequestBuilder.prototype, "offerShiftRequests", {
        get: function () {
            return new offerShiftRequestsRequestBuilder_1.OfferShiftRequestsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScheduleRequestBuilder.prototype, "openShiftChangeRequests", {
        get: function () {
            return new openShiftChangeRequestsRequestBuilder_1.OpenShiftChangeRequestsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScheduleRequestBuilder.prototype, "openShifts", {
        get: function () {
            return new openShiftsRequestBuilder_1.OpenShiftsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScheduleRequestBuilder.prototype, "schedulingGroups", {
        get: function () {
            return new schedulingGroupsRequestBuilder_1.SchedulingGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScheduleRequestBuilder.prototype, "shifts", {
        get: function () {
            return new shiftsRequestBuilder_1.ShiftsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScheduleRequestBuilder.prototype, "swapShiftsChangeRequests", {
        get: function () {
            return new swapShiftsChangeRequestsRequestBuilder_1.SwapShiftsChangeRequestsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScheduleRequestBuilder.prototype, "timeOffReasons", {
        get: function () {
            return new timeOffReasonsRequestBuilder_1.TimeOffReasonsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScheduleRequestBuilder.prototype, "timeOffRequests", {
        get: function () {
            return new timeOffRequestsRequestBuilder_1.TimeOffRequestsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScheduleRequestBuilder.prototype, "timesOff", {
        get: function () {
            return new timesOffRequestBuilder_1.TimesOffRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The schedule of shifts for this team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ScheduleRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The schedule of shifts for this team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ScheduleRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The schedule of shifts for this team.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ScheduleRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The schedule of shifts for this team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ScheduleRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The schedule of shifts for this team.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Schedule
     */
    ScheduleRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, schedule_1.Schedule, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.offerShiftRequests collection
     * @param id Unique identifier of the item
     * @returns a OfferShiftRequestRequestBuilder
     */
    ScheduleRequestBuilder.prototype.offerShiftRequestsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new offerShiftRequestRequestBuilder_1.OfferShiftRequestRequestBuilder(this.currentPath + this.pathSegment + "/offerShiftRequests/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.openShiftChangeRequests collection
     * @param id Unique identifier of the item
     * @returns a OpenShiftChangeRequestRequestBuilder
     */
    ScheduleRequestBuilder.prototype.openShiftChangeRequestsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new openShiftChangeRequestRequestBuilder_1.OpenShiftChangeRequestRequestBuilder(this.currentPath + this.pathSegment + "/openShiftChangeRequests/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.openShifts collection
     * @param id Unique identifier of the item
     * @returns a OpenShiftRequestBuilder
     */
    ScheduleRequestBuilder.prototype.openShiftsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new openShiftRequestBuilder_1.OpenShiftRequestBuilder(this.currentPath + this.pathSegment + "/openShifts/" + id, this.httpCore, false);
    };
    ;
    /**
     * The schedule of shifts for this team.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ScheduleRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.schedulingGroups collection
     * @param id Unique identifier of the item
     * @returns a SchedulingGroupRequestBuilder
     */
    ScheduleRequestBuilder.prototype.schedulingGroupsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new schedulingGroupRequestBuilder_1.SchedulingGroupRequestBuilder(this.currentPath + this.pathSegment + "/schedulingGroups/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.shifts collection
     * @param id Unique identifier of the item
     * @returns a ShiftRequestBuilder
     */
    ScheduleRequestBuilder.prototype.shiftsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new shiftRequestBuilder_1.ShiftRequestBuilder(this.currentPath + this.pathSegment + "/shifts/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.swapShiftsChangeRequests collection
     * @param id Unique identifier of the item
     * @returns a SwapShiftsChangeRequestRequestBuilder
     */
    ScheduleRequestBuilder.prototype.swapShiftsChangeRequestsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new swapShiftsChangeRequestRequestBuilder_1.SwapShiftsChangeRequestRequestBuilder(this.currentPath + this.pathSegment + "/swapShiftsChangeRequests/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.timeOffReasons collection
     * @param id Unique identifier of the item
     * @returns a TimeOffReasonRequestBuilder
     */
    ScheduleRequestBuilder.prototype.timeOffReasonsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new timeOffReasonRequestBuilder_1.TimeOffReasonRequestBuilder(this.currentPath + this.pathSegment + "/timeOffReasons/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.timeOffRequests collection
     * @param id Unique identifier of the item
     * @returns a TimeOffRequestRequestBuilder
     */
    ScheduleRequestBuilder.prototype.timeOffRequestsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new timeOffRequestRequestBuilder_1.TimeOffRequestRequestBuilder(this.currentPath + this.pathSegment + "/timeOffRequests/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.schedule.timesOff collection
     * @param id Unique identifier of the item
     * @returns a TimeOffRequestBuilder
     */
    ScheduleRequestBuilder.prototype.timesOffById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new timeOffRequestBuilder_1.TimeOffRequestBuilder(this.currentPath + this.pathSegment + "/timesOff/" + id, this.httpCore, false);
    };
    ;
    return ScheduleRequestBuilder;
}());
exports.ScheduleRequestBuilder = ScheduleRequestBuilder;
