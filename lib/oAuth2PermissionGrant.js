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
exports.OAuth2PermissionGrant = void 0;
var entity_1 = require("./entity");
var OAuth2PermissionGrant = /** @class */ (function (_super) {
    __extends(OAuth2PermissionGrant, _super);
    /**
     * Instantiates a new oAuth2PermissionGrant and sets the default values.
     */
    function OAuth2PermissionGrant() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OAuth2PermissionGrant.prototype, "clientId", {
        /**
         * Gets the clientId property value. The id of the client service principal for the application which is authorized to act on behalf of a signed-in user when accessing an API. Required. Supports $filter (eq only).
         * @returns a string
         */
        get: function () {
            return this._clientId;
        },
        /**
         * Sets the clientId property value. The id of the client service principal for the application which is authorized to act on behalf of a signed-in user when accessing an API. Required. Supports $filter (eq only).
         * @param value Value to set for the clientId property.
         */
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OAuth2PermissionGrant.prototype, "consentType", {
        /**
         * Gets the consentType property value. Indicates whether authorization is granted for the client application to impersonate all users or only a specific user. AllPrincipals indicates authorization to impersonate all users. Principal indicates authorization to impersonate a specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to consent on behalf of themselves in some cases, for some delegated permissions. Required. Supports $filter (eq only).
         * @returns a string
         */
        get: function () {
            return this._consentType;
        },
        /**
         * Sets the consentType property value. Indicates whether authorization is granted for the client application to impersonate all users or only a specific user. AllPrincipals indicates authorization to impersonate all users. Principal indicates authorization to impersonate a specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to consent on behalf of themselves in some cases, for some delegated permissions. Required. Supports $filter (eq only).
         * @param value Value to set for the consentType property.
         */
        set: function (value) {
            this._consentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OAuth2PermissionGrant.prototype, "principalId", {
        /**
         * Gets the principalId property value. The id of the user on behalf of whom the client is authorized to access the resource, when consentType is Principal. If consentType is AllPrincipals this value is null. Required when consentType is Principal.
         * @returns a string
         */
        get: function () {
            return this._principalId;
        },
        /**
         * Sets the principalId property value. The id of the user on behalf of whom the client is authorized to access the resource, when consentType is Principal. If consentType is AllPrincipals this value is null. Required when consentType is Principal.
         * @param value Value to set for the principalId property.
         */
        set: function (value) {
            this._principalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OAuth2PermissionGrant.prototype, "resourceId", {
        /**
         * Gets the resourceId property value. The id of the resource service principal to which access is authorized. This identifies the API which the client is authorized to attempt to call on behalf of a signed-in user.
         * @returns a string
         */
        get: function () {
            return this._resourceId;
        },
        /**
         * Sets the resourceId property value. The id of the resource service principal to which access is authorized. This identifies the API which the client is authorized to attempt to call on behalf of a signed-in user.
         * @param value Value to set for the resourceId property.
         */
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OAuth2PermissionGrant.prototype, "scope", {
        /**
         * Gets the scope property value. A space-separated list of the claim values for delegated permissions which should be included in access tokens for the resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the value field of one of the delegated permissions defined by the API, listed in the publishedPermissionScopes property of the resource service principal.
         * @returns a string
         */
        get: function () {
            return this._scope;
        },
        /**
         * Sets the scope property value. A space-separated list of the claim values for delegated permissions which should be included in access tokens for the resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the value field of one of the delegated permissions defined by the API, listed in the publishedPermissionScopes property of the resource service principal.
         * @param value Value to set for the scope property.
         */
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OAuth2PermissionGrant.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["clientId", function (o, n) { o.clientId = n.getStringValue(); }],
            ["consentType", function (o, n) { o.consentType = n.getStringValue(); }],
            ["principalId", function (o, n) { o.principalId = n.getStringValue(); }],
            ["resourceId", function (o, n) { o.resourceId = n.getStringValue(); }],
            ["scope", function (o, n) { o.scope = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OAuth2PermissionGrant.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("clientId", this.clientId);
        writer.writeStringValue("consentType", this.consentType);
        writer.writeStringValue("principalId", this.principalId);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeStringValue("scope", this.scope);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return OAuth2PermissionGrant;
}(entity_1.Entity));
exports.OAuth2PermissionGrant = OAuth2PermissionGrant;
