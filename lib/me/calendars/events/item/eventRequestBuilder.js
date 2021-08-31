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
exports.EventRequestBuilder = void 0;
var event_1 = require("../../../../event");
var attachmentsRequestBuilder_1 = require("../attachments/attachmentsRequestBuilder");
var attachmentRequestBuilder_1 = require("../attachments/item/attachmentRequestBuilder");
var calendarRequestBuilder_1 = require("../calendar/calendarRequestBuilder");
var extensionsRequestBuilder_1 = require("../extensions/extensionsRequestBuilder");
var extensionRequestBuilder_1 = require("../extensions/item/extensionRequestBuilder");
var instancesRequestBuilder_1 = require("../instances/instancesRequestBuilder");
var microsoft_graph_acceptRequestBuilder_1 = require("../microsoft/graph/accept/microsoft.graph.acceptRequestBuilder");
var multiValueLegacyExtendedPropertyRequestBuilder_1 = require("../multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder");
var multiValueExtendedPropertiesRequestBuilder_1 = require("../multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder");
var singleValueLegacyExtendedPropertyRequestBuilder_1 = require("../singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder");
var singleValueExtendedPropertiesRequestBuilder_1 = require("../singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me/calendars/{calendar-id}/events/{event-id}  */
var EventRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new EventRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function EventRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(EventRequestBuilder.prototype, "attachments", {
        get: function () {
            return new attachmentsRequestBuilder_1.AttachmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventRequestBuilder.prototype, "calendar", {
        get: function () {
            return new calendarRequestBuilder_1.CalendarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventRequestBuilder.prototype, "extensions", {
        get: function () {
            return new extensionsRequestBuilder_1.ExtensionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventRequestBuilder.prototype, "instances", {
        get: function () {
            return new instancesRequestBuilder_1.InstancesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    EventRequestBuilder.prototype.accept = function () {
        return new microsoft_graph_acceptRequestBuilder_1.Microsoft.graph.acceptRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    EventRequestBuilder.prototype.cancel = function () {
        return new microsoft_graph_acceptRequestBuilder_1.Microsoft.graph.cancelRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    EventRequestBuilder.prototype.decline = function () {
        return new microsoft_graph_acceptRequestBuilder_1.Microsoft.graph.declineRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    EventRequestBuilder.prototype.dismissReminder = function () {
        return new microsoft_graph_acceptRequestBuilder_1.Microsoft.graph.dismissReminderRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    EventRequestBuilder.prototype.forward = function () {
        return new microsoft_graph_acceptRequestBuilder_1.Microsoft.graph.forwardRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    EventRequestBuilder.prototype.snoozeReminder = function () {
        return new microsoft_graph_acceptRequestBuilder_1.Microsoft.graph.snoozeReminderRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    EventRequestBuilder.prototype.tentativelyAccept = function () {
        return new microsoft_graph_acceptRequestBuilder_1.Microsoft.graph.tentativelyAcceptRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(EventRequestBuilder.prototype, "multiValueExtendedProperties", {
        get: function () {
            return new multiValueExtendedPropertiesRequestBuilder_1.MultiValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventRequestBuilder.prototype, "singleValueExtendedProperties", {
        get: function () {
            return new singleValueExtendedPropertiesRequestBuilder_1.SingleValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.me.calendars.events.attachments collection
     * @param id Unique identifier of the item
     * @returns a AttachmentRequestBuilder
     */
    EventRequestBuilder.prototype.attachmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new attachmentRequestBuilder_1.AttachmentRequestBuilder(this.currentPath + this.pathSegment + "/attachments/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    EventRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    EventRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The events in the calendar. Navigation property. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    EventRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The events in the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    EventRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.calendars.events.extensions collection
     * @param id Unique identifier of the item
     * @returns a ExtensionRequestBuilder
     */
    EventRequestBuilder.prototype.extensionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new extensionRequestBuilder_1.ExtensionRequestBuilder(this.currentPath + this.pathSegment + "/extensions/" + id, this.httpCore, false);
    };
    ;
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Event
     */
    EventRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, event_1.Event, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.calendars.events.instances collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    EventRequestBuilder.prototype.instancesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/instances/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.calendars.events.multiValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyRequestBuilder
     */
    EventRequestBuilder.prototype.multiValueExtendedPropertiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new multiValueLegacyExtendedPropertyRequestBuilder_1.MultiValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/multiValueExtendedProperties/" + id, this.httpCore, false);
    };
    ;
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    EventRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.calendars.events.singleValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyRequestBuilder
     */
    EventRequestBuilder.prototype.singleValueExtendedPropertiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new singleValueLegacyExtendedPropertyRequestBuilder_1.SingleValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/singleValueExtendedProperties/" + id, this.httpCore, false);
    };
    ;
    return EventRequestBuilder;
}());
exports.EventRequestBuilder = EventRequestBuilder;
