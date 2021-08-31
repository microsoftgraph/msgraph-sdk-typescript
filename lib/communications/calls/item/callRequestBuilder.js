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
exports.CallRequestBuilder = void 0;
var call_1 = require("../../call");
var microsoft_graph_answerRequestBuilder_1 = require("../microsoft/graph/answer/microsoft.graph.answerRequestBuilder");
var commsOperationRequestBuilder_1 = require("../operations/item/commsOperationRequestBuilder");
var operationsRequestBuilder_1 = require("../operations/operationsRequestBuilder");
var participantRequestBuilder_1 = require("../participants/item/participantRequestBuilder");
var participantsRequestBuilder_1 = require("../participants/participantsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /communications/calls/{call-id}  */
var CallRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new CallRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function CallRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(CallRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    CallRequestBuilder.prototype.answer = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.answerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.cancelMediaProcessing = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.cancelMediaProcessingRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.changeScreenSharingRole = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.changeScreenSharingRoleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.keepAlive = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.keepAliveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.mute = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.muteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.playPrompt = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.playPromptRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.recordResponse = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.recordResponseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.redirect = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.redirectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.reject = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.rejectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.subscribeToTone = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.subscribeToToneRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.transfer = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.transferRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.unmute = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.unmuteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    CallRequestBuilder.prototype.updateRecordingStatus = function () {
        return new microsoft_graph_answerRequestBuilder_1.Microsoft.graph.updateRecordingStatusRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(CallRequestBuilder.prototype, "operations", {
        get: function () {
            return new operationsRequestBuilder_1.OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CallRequestBuilder.prototype, "participants", {
        get: function () {
            return new participantsRequestBuilder_1.ParticipantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Delete navigation property calls for communications
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    CallRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get calls from communications
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    CallRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update the navigation property calls in communications
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    CallRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Delete navigation property calls for communications
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    CallRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Get calls from communications
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Call
     */
    CallRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, call_1.Call, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.communications.calls.operations collection
     * @param id Unique identifier of the item
     * @returns a CommsOperationRequestBuilder
     */
    CallRequestBuilder.prototype.operationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new commsOperationRequestBuilder_1.CommsOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.communications.calls.participants collection
     * @param id Unique identifier of the item
     * @returns a ParticipantRequestBuilder
     */
    CallRequestBuilder.prototype.participantsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new participantRequestBuilder_1.ParticipantRequestBuilder(this.currentPath + this.pathSegment + "/participants/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update the navigation property calls in communications
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    CallRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return CallRequestBuilder;
}());
exports.CallRequestBuilder = CallRequestBuilder;
