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
exports.AuthenticationRequestBuilder = void 0;
var authentication_1 = require("../../me/authentication/authentication");
var fido2MethodsRequestBuilder_1 = require("./fido2Methods/fido2MethodsRequestBuilder");
var fido2AuthenticationMethodRequestBuilder_1 = require("./fido2Methods/item/fido2AuthenticationMethodRequestBuilder");
var authenticationMethodRequestBuilder_1 = require("./methods/item/authenticationMethodRequestBuilder");
var methodsRequestBuilder_1 = require("./methods/methodsRequestBuilder");
var microsoftAuthenticatorAuthenticationMethodRequestBuilder_1 = require("./microsoftAuthenticatorMethods/item/microsoftAuthenticatorAuthenticationMethodRequestBuilder");
var microsoftAuthenticatorMethodsRequestBuilder_1 = require("./microsoftAuthenticatorMethods/microsoftAuthenticatorMethodsRequestBuilder");
var windowsHelloForBusinessAuthenticationMethodRequestBuilder_1 = require("./windowsHelloForBusinessMethods/item/windowsHelloForBusinessAuthenticationMethodRequestBuilder");
var windowsHelloForBusinessMethodsRequestBuilder_1 = require("./windowsHelloForBusinessMethods/windowsHelloForBusinessMethodsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/authentication  */
var AuthenticationRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new AuthenticationRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function AuthenticationRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/authentication";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(AuthenticationRequestBuilder.prototype, "fido2Methods", {
        get: function () {
            return new fido2MethodsRequestBuilder_1.Fido2MethodsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationRequestBuilder.prototype, "methods", {
        get: function () {
            return new methodsRequestBuilder_1.MethodsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationRequestBuilder.prototype, "microsoftAuthenticatorMethods", {
        get: function () {
            return new microsoftAuthenticatorMethodsRequestBuilder_1.MicrosoftAuthenticatorMethodsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationRequestBuilder.prototype, "windowsHelloForBusinessMethods", {
        get: function () {
            return new windowsHelloForBusinessMethodsRequestBuilder_1.WindowsHelloForBusinessMethodsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Delete navigation property authentication for users
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    AuthenticationRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get authentication from users
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    AuthenticationRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update the navigation property authentication in users
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    AuthenticationRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Delete navigation property authentication for users
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    AuthenticationRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.authentication.fido2Methods collection
     * @param id Unique identifier of the item
     * @returns a Fido2AuthenticationMethodRequestBuilder
     */
    AuthenticationRequestBuilder.prototype.fido2MethodsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new fido2AuthenticationMethodRequestBuilder_1.Fido2AuthenticationMethodRequestBuilder(this.currentPath + this.pathSegment + "/fido2Methods/" + id, this.httpCore, false);
    };
    ;
    /**
     * Get authentication from users
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    AuthenticationRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, authentication_1.Authentication, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.authentication.methods collection
     * @param id Unique identifier of the item
     * @returns a AuthenticationMethodRequestBuilder
     */
    AuthenticationRequestBuilder.prototype.methodsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new authenticationMethodRequestBuilder_1.AuthenticationMethodRequestBuilder(this.currentPath + this.pathSegment + "/methods/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.authentication.microsoftAuthenticatorMethods collection
     * @param id Unique identifier of the item
     * @returns a MicrosoftAuthenticatorAuthenticationMethodRequestBuilder
     */
    AuthenticationRequestBuilder.prototype.microsoftAuthenticatorMethodsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new microsoftAuthenticatorAuthenticationMethodRequestBuilder_1.MicrosoftAuthenticatorAuthenticationMethodRequestBuilder(this.currentPath + this.pathSegment + "/microsoftAuthenticatorMethods/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update the navigation property authentication in users
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    AuthenticationRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.authentication.windowsHelloForBusinessMethods collection
     * @param id Unique identifier of the item
     * @returns a WindowsHelloForBusinessAuthenticationMethodRequestBuilder
     */
    AuthenticationRequestBuilder.prototype.windowsHelloForBusinessMethodsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new windowsHelloForBusinessAuthenticationMethodRequestBuilder_1.WindowsHelloForBusinessAuthenticationMethodRequestBuilder(this.currentPath + this.pathSegment + "/windowsHelloForBusinessMethods/" + id, this.httpCore, false);
    };
    ;
    return AuthenticationRequestBuilder;
}());
exports.AuthenticationRequestBuilder = AuthenticationRequestBuilder;
