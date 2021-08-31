"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.AppConsentRequest = void 0;
var entity_1 = require("../entity");
var userConsentRequest_1 = require("./appConsent/userConsentRequest");
var AppConsentRequest = /** @class */ (function (_super) {
    __extends(AppConsentRequest, _super);
    /**
     * Instantiates a new appConsentRequest and sets the default values.
     */
    function AppConsentRequest() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AppConsentRequest.prototype, "appDisplayName", {
        /**
         * Gets the appDisplayName property value. The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
         * @returns a string
         */
        get: function () {
            return this._appDisplayName;
        },
        /**
         * Sets the appDisplayName property value. The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
         * @param value Value to set for the appDisplayName property.
         */
        set: function (value) {
            this._appDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppConsentRequest.prototype, "appId", {
        /**
         * Gets the appId property value. The identifier of the application. Required. Supports $filter (eq only) and $orderby.
         * @returns a string
         */
        get: function () {
            return this._appId;
        },
        /**
         * Sets the appId property value. The identifier of the application. Required. Supports $filter (eq only) and $orderby.
         * @param value Value to set for the appId property.
         */
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppConsentRequest.prototype, "pendingScopes", {
        /**
         * Gets the pendingScopes property value. A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required.
         * @returns a appConsentRequestScope
         */
        get: function () {
            return this._pendingScopes;
        },
        /**
         * Sets the pendingScopes property value. A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required.
         * @param value Value to set for the pendingScopes property.
         */
        set: function (value) {
            this._pendingScopes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppConsentRequest.prototype, "userConsentRequests", {
        /**
         * Gets the userConsentRequests property value. A list of pending user consent requests.
         * @returns a userConsentRequest
         */
        get: function () {
            return this._userConsentRequests;
        },
        /**
         * Sets the userConsentRequests property value. A list of pending user consent requests.
         * @param value Value to set for the userConsentRequests property.
         */
        set: function (value) {
            this._userConsentRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AppConsentRequest.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appDisplayName", function (o, n) { o.appDisplayName = n.getStringValue(); }],
            ["appId", function (o, n) { o.appId = n.getStringValue(); }],
            ["pendingScopes", function (o, n) { o.pendingScopes = n.getCollectionOfPrimitiveValues(); }],
            ["userConsentRequests", function (o, n) { o.userConsentRequests = n.getCollectionOfObjectValues(userConsentRequest_1.UserConsentRequest); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AppConsentRequest.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("appId", this.appId);
        writer.writeCollectionOfPrimitiveValues("pendingScopes", this.pendingScopes);
        writer.writeCollectionOfObjectValues("userConsentRequests", this.userConsentRequests);
    };
    ;
    ;
    ;
    ;
    ;
    return AppConsentRequest;
}(entity_1.Entity));
exports.AppConsentRequest = AppConsentRequest;
