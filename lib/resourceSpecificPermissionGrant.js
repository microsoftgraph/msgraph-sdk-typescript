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
exports.ResourceSpecificPermissionGrant = void 0;
var directoryObject_1 = require("./directoryObject");
var ResourceSpecificPermissionGrant = /** @class */ (function (_super) {
    __extends(ResourceSpecificPermissionGrant, _super);
    /**
     * Instantiates a new resourceSpecificPermissionGrant and sets the default values.
     */
    function ResourceSpecificPermissionGrant() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ResourceSpecificPermissionGrant.prototype, "clientAppId", {
        /**
         * Gets the clientAppId property value. ID of the service principal of the Azure AD app that has been granted access. Read-only.
         * @returns a string
         */
        get: function () {
            return this._clientAppId;
        },
        /**
         * Sets the clientAppId property value. ID of the service principal of the Azure AD app that has been granted access. Read-only.
         * @param value Value to set for the clientAppId property.
         */
        set: function (value) {
            this._clientAppId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ResourceSpecificPermissionGrant.prototype, "clientId", {
        /**
         * Gets the clientId property value. ID of the Azure AD app that has been granted access. Read-only.
         * @returns a string
         */
        get: function () {
            return this._clientId;
        },
        /**
         * Sets the clientId property value. ID of the Azure AD app that has been granted access. Read-only.
         * @param value Value to set for the clientId property.
         */
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ResourceSpecificPermissionGrant.prototype, "permission", {
        /**
         * Gets the permission property value. The name of the resource-specific permission. Read-only.
         * @returns a string
         */
        get: function () {
            return this._permission;
        },
        /**
         * Sets the permission property value. The name of the resource-specific permission. Read-only.
         * @param value Value to set for the permission property.
         */
        set: function (value) {
            this._permission = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ResourceSpecificPermissionGrant.prototype, "permissionType", {
        /**
         * Gets the permissionType property value. The type of permission. Possible values are: Application, Delegated. Read-only.
         * @returns a string
         */
        get: function () {
            return this._permissionType;
        },
        /**
         * Sets the permissionType property value. The type of permission. Possible values are: Application, Delegated. Read-only.
         * @param value Value to set for the permissionType property.
         */
        set: function (value) {
            this._permissionType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ResourceSpecificPermissionGrant.prototype, "resourceAppId", {
        /**
         * Gets the resourceAppId property value. ID of the Azure AD app that is hosting the resource. Read-only.
         * @returns a string
         */
        get: function () {
            return this._resourceAppId;
        },
        /**
         * Sets the resourceAppId property value. ID of the Azure AD app that is hosting the resource. Read-only.
         * @param value Value to set for the resourceAppId property.
         */
        set: function (value) {
            this._resourceAppId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ResourceSpecificPermissionGrant.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["clientAppId", function (o, n) { o.clientAppId = n.getStringValue(); }],
            ["clientId", function (o, n) { o.clientId = n.getStringValue(); }],
            ["permission", function (o, n) { o.permission = n.getStringValue(); }],
            ["permissionType", function (o, n) { o.permissionType = n.getStringValue(); }],
            ["resourceAppId", function (o, n) { o.resourceAppId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ResourceSpecificPermissionGrant.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("clientAppId", this.clientAppId);
        writer.writeStringValue("clientId", this.clientId);
        writer.writeStringValue("permission", this.permission);
        writer.writeStringValue("permissionType", this.permissionType);
        writer.writeStringValue("resourceAppId", this.resourceAppId);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return ResourceSpecificPermissionGrant;
}(directoryObject_1.DirectoryObject));
exports.ResourceSpecificPermissionGrant = ResourceSpecificPermissionGrant;
