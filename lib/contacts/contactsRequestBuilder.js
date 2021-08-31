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
exports.ContactsRequestBuilder = void 0;
var orgContact_1 = require("../orgContact");
var contactsResponse_1 = require("./contactsResponse");
var microsoft_graph_getAvailableExtensionPropertiesRequestBuilder_1 = require("./microsoft/graph/getAvailableExtensionProperties/microsoft.graph.getAvailableExtensionPropertiesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /contacts  */
var ContactsRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ContactsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ContactsRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/contacts";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(ContactsRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    ContactsRequestBuilder.prototype.getAvailableExtensionProperties = function () {
        return new microsoft_graph_getAvailableExtensionPropertiesRequestBuilder_1.Microsoft.graph.getAvailableExtensionPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ContactsRequestBuilder.prototype.getByIds = function () {
        return new microsoft_graph_getAvailableExtensionPropertiesRequestBuilder_1.Microsoft.graph.getByIdsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ContactsRequestBuilder.prototype.validateProperties = function () {
        return new microsoft_graph_getAvailableExtensionPropertiesRequestBuilder_1.Microsoft.graph.validatePropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ;
    /**
     * Get entities from contacts
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ContactsRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Add new entity to contacts
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ContactsRequestBuilder.prototype.createPostRequestInfo = function (body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.POST;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get entities from contacts
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContactsResponse
     */
    ContactsRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, contactsResponse_1.ContactsResponse, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Add new entity to contacts
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OrgContact
     */
    ContactsRequestBuilder.prototype.post = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPostRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, orgContact_1.OrgContact, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return ContactsRequestBuilder;
}());
exports.ContactsRequestBuilder = ContactsRequestBuilder;
