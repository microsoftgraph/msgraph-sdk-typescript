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
exports.ContactFolderRequestBuilder = void 0;
var contactFolder_1 = require("../../../contactFolder");
var childFoldersRequestBuilder_1 = require("../childFolders/childFoldersRequestBuilder");
var contactsRequestBuilder_1 = require("../contacts/contactsRequestBuilder");
var contactRequestBuilder_1 = require("../contacts/item/contactRequestBuilder");
var multiValueLegacyExtendedPropertyRequestBuilder_1 = require("../multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder");
var multiValueExtendedPropertiesRequestBuilder_1 = require("../multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder");
var singleValueLegacyExtendedPropertyRequestBuilder_1 = require("../singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder");
var singleValueExtendedPropertiesRequestBuilder_1 = require("../singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/contactFolders/{contactFolder-id}  */
var ContactFolderRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ContactFolderRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ContactFolderRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(ContactFolderRequestBuilder.prototype, "childFolders", {
        get: function () {
            return new childFoldersRequestBuilder_1.ChildFoldersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactFolderRequestBuilder.prototype, "contacts", {
        get: function () {
            return new contactsRequestBuilder_1.ContactsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactFolderRequestBuilder.prototype, "multiValueExtendedProperties", {
        get: function () {
            return new multiValueExtendedPropertiesRequestBuilder_1.MultiValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactFolderRequestBuilder.prototype, "singleValueExtendedProperties", {
        get: function () {
            return new singleValueExtendedPropertiesRequestBuilder_1.SingleValueExtendedPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.users.contactFolders.childFolders collection
     * @param id Unique identifier of the item
     * @returns a ContactFolderRequestBuilder
     */
    ContactFolderRequestBuilder.prototype.childFoldersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new ContactFolderRequestBuilder(this.currentPath + this.pathSegment + "/childFolders/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.contactFolders.contacts collection
     * @param id Unique identifier of the item
     * @returns a ContactRequestBuilder
     */
    ContactFolderRequestBuilder.prototype.contactsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new contactRequestBuilder_1.ContactRequestBuilder(this.currentPath + this.pathSegment + "/contacts/" + id, this.httpCore, false);
    };
    ;
    /**
     * The user's contacts folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ContactFolderRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The user's contacts folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ContactFolderRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The user's contacts folders. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ContactFolderRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The user's contacts folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ContactFolderRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The user's contacts folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContactFolder
     */
    ContactFolderRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, contactFolder_1.ContactFolder, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.contactFolders.multiValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyRequestBuilder
     */
    ContactFolderRequestBuilder.prototype.multiValueExtendedPropertiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new multiValueLegacyExtendedPropertyRequestBuilder_1.MultiValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/multiValueExtendedProperties/" + id, this.httpCore, false);
    };
    ;
    /**
     * The user's contacts folders. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ContactFolderRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.contactFolders.singleValueExtendedProperties collection
     * @param id Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyRequestBuilder
     */
    ContactFolderRequestBuilder.prototype.singleValueExtendedPropertiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new singleValueLegacyExtendedPropertyRequestBuilder_1.SingleValueLegacyExtendedPropertyRequestBuilder(this.currentPath + this.pathSegment + "/singleValueExtendedProperties/" + id, this.httpCore, false);
    };
    ;
    return ContactFolderRequestBuilder;
}());
exports.ContactFolderRequestBuilder = ContactFolderRequestBuilder;
