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
exports.CalendarRequestBuilder = void 0;
var calendar_1 = require("../../../calendar");
var calendarPermissionsRequestBuilder_1 = require("./calendarPermissions/calendarPermissionsRequestBuilder");
var calendarPermissionRequestBuilder_1 = require("./calendarPermissions/item/calendarPermissionRequestBuilder");
var calendarViewRequestBuilder_1 = require("./calendarView/calendarViewRequestBuilder");
var eventRequestBuilder_1 = require("./calendarView/item/eventRequestBuilder");
var eventsRequestBuilder_1 = require("./events/eventsRequestBuilder");
var microsoft_graph_getScheduleRequestBuilder_1 = require("./microsoft/graph/getSchedule/microsoft.graph.getScheduleRequestBuilder");
var multiValueLegacyExtendedPropertyRequestBuilder_1 = require("./multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder");
var multiValueExtendedPropertiesRequestBuilder_1 = require("./multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder");
var singleValueLegacyExtendedPropertyRequestBuilder_1 = require("./singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder");
var singleValueExtendedPropertiesRequestBuilder_1 = require("./singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /groups/{group-id}/calendarView/{event-id}/calendar  */
var CalendarRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new CalendarRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function CalendarRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/calendar";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(CalendarRequestBuilder.prototype, "calendarPermissions", {
        get: function () {
            return new calendarPermissionsRequestBuilder_1.CalendarPermissionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarRequestBuilder.prototype, "calendarView", {
        get: function () {
            return new calendarViewRequestBuilder_1.CalendarViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarRequestBuilder.prototype, "events", {
        get: function () {
            return new eventsRequestBuilder_1.EventsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    CalendarRequestBuilder.prototype.getSchedule = function () {
        return new microsoft_graph_getScheduleRequestBuilder_1.Microsoft.graph.getScheduleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(CalendarRequestBuilder.prototype, "multiValueExtendedProperties", {
        get: function () {
            return new multiValueExtendedPropertiesRequestBuilder_1.MultiValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarRequestBuilder.prototype, "singleValueExtendedProperties", {
        get: function () {
            return new singleValueExtendedPropertiesRequestBuilder_1.SingleValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.groups.calendarView.calendar.calendarPermissions collection
     * @param id Unique identifier of the item
     * @returns a CalendarPermissionRequestBuilder
     */
    CalendarRequestBuilder.prototype.calendarPermissionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new calendarPermissionRequestBuilder_1.CalendarPermissionRequestBuilder(this.currentPath + this.pathSegment + "/calendarPermissions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.calendarView.calendar.calendarView collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    CalendarRequestBuilder.prototype.calendarViewById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new eventRequestBuilder_1.EventRequestBuilder(this.currentPath + this.pathSegment + "/calendarView/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * The calendar that contains the event. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    CalendarRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The calendar that contains the event. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    CalendarRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The calendar that contains the event. Navigation property. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    CalendarRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The calendar that contains the event. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    CalendarRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.calendarView.calendar.events collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    CalendarRequestBuilder.prototype.eventsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new eventRequestBuilder_1.EventRequestBuilder(this.currentPath + this.pathSegment + "/events/" + id, this.httpCore, false);
    };
    ;
    /**
     * The calendar that contains the event. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    CalendarRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, calendar_1.Calendar, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.calendarView.calendar.multiValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyRequestBuilder
     */
    CalendarRequestBuilder.prototype.multiValueExtendedPropertiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new multiValueLegacyExtendedPropertyRequestBuilder_1.MultiValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/multiValueExtendedProperties/" + id, this.httpCore, false);
    };
    ;
    /**
     * The calendar that contains the event. Navigation property. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    CalendarRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.calendarView.calendar.singleValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyRequestBuilder
     */
    CalendarRequestBuilder.prototype.singleValueExtendedPropertiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new singleValueLegacyExtendedPropertyRequestBuilder_1.SingleValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/singleValueExtendedProperties/" + id, this.httpCore, false);
    };
    ;
    return CalendarRequestBuilder;
}());
exports.CalendarRequestBuilder = CalendarRequestBuilder;
