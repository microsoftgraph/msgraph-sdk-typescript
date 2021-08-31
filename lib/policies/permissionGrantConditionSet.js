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
exports.PermissionGrantConditionSet = void 0;
var entity_1 = require("../entity");
var PermissionGrantConditionSet = /** @class */ (function (_super) {
    __extends(PermissionGrantConditionSet, _super);
    /**
     * Instantiates a new permissionGrantConditionSet and sets the default values.
     */
    function PermissionGrantConditionSet() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PermissionGrantConditionSet.prototype, "clientApplicationIds", {
        /**
         * Gets the clientApplicationIds property value. A list of appId values for the client applications to match with, or a list with the single value all to match any client application. Default is the single value all.
         * @returns a string
         */
        get: function () {
            return this._clientApplicationIds;
        },
        /**
         * Sets the clientApplicationIds property value. A list of appId values for the client applications to match with, or a list with the single value all to match any client application. Default is the single value all.
         * @param value Value to set for the clientApplicationIds property.
         */
        set: function (value) {
            this._clientApplicationIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionGrantConditionSet.prototype, "clientApplicationPublisherIds", {
        /**
         * Gets the clientApplicationPublisherIds property value. A list of Microsoft Partner Network (MPN) IDs for verified publishers of the client application, or a list with the single value all to match with client apps from any publisher. Default is the single value all.
         * @returns a string
         */
        get: function () {
            return this._clientApplicationPublisherIds;
        },
        /**
         * Sets the clientApplicationPublisherIds property value. A list of Microsoft Partner Network (MPN) IDs for verified publishers of the client application, or a list with the single value all to match with client apps from any publisher. Default is the single value all.
         * @param value Value to set for the clientApplicationPublisherIds property.
         */
        set: function (value) {
            this._clientApplicationPublisherIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionGrantConditionSet.prototype, "clientApplicationsFromVerifiedPublisherOnly", {
        /**
         * Gets the clientApplicationsFromVerifiedPublisherOnly property value. Set to true to only match on client applications with a verified publisher. Set to false to match on any client app, even if it does not have a verified publisher. Default is false.
         * @returns a boolean
         */
        get: function () {
            return this._clientApplicationsFromVerifiedPublisherOnly;
        },
        /**
         * Sets the clientApplicationsFromVerifiedPublisherOnly property value. Set to true to only match on client applications with a verified publisher. Set to false to match on any client app, even if it does not have a verified publisher. Default is false.
         * @param value Value to set for the clientApplicationsFromVerifiedPublisherOnly property.
         */
        set: function (value) {
            this._clientApplicationsFromVerifiedPublisherOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionGrantConditionSet.prototype, "clientApplicationTenantIds", {
        /**
         * Gets the clientApplicationTenantIds property value. A list of Azure Active Directory tenant IDs in which the client application is registered, or a list with the single value all to match with client apps registered in any tenant. Default is the single value all.
         * @returns a string
         */
        get: function () {
            return this._clientApplicationTenantIds;
        },
        /**
         * Sets the clientApplicationTenantIds property value. A list of Azure Active Directory tenant IDs in which the client application is registered, or a list with the single value all to match with client apps registered in any tenant. Default is the single value all.
         * @param value Value to set for the clientApplicationTenantIds property.
         */
        set: function (value) {
            this._clientApplicationTenantIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionGrantConditionSet.prototype, "permissionClassification", {
        /**
         * Gets the permissionClassification property value. The permission classification for the permission being granted, or all to match with any permission classification (including permissions which are not classified). Default is all.
         * @returns a string
         */
        get: function () {
            return this._permissionClassification;
        },
        /**
         * Sets the permissionClassification property value. The permission classification for the permission being granted, or all to match with any permission classification (including permissions which are not classified). Default is all.
         * @param value Value to set for the permissionClassification property.
         */
        set: function (value) {
            this._permissionClassification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionGrantConditionSet.prototype, "permissions", {
        /**
         * Gets the permissions property value. The list of id values for the specific permissions to match with, or a list with the single value all to match with any permission. The id of delegated permissions can be found in the publishedPermissionScopes property of the API's **servicePrincipal** object. The id of application permissions can be found in the appRoles property of the API's **servicePrincipal** object. The id of resource-specific application permissions can be found in the resourceSpecificApplicationPermissions property of the API's **servicePrincipal** object. Default is the single value all.
         * @returns a string
         */
        get: function () {
            return this._permissions;
        },
        /**
         * Sets the permissions property value. The list of id values for the specific permissions to match with, or a list with the single value all to match with any permission. The id of delegated permissions can be found in the publishedPermissionScopes property of the API's **servicePrincipal** object. The id of application permissions can be found in the appRoles property of the API's **servicePrincipal** object. The id of resource-specific application permissions can be found in the resourceSpecificApplicationPermissions property of the API's **servicePrincipal** object. Default is the single value all.
         * @param value Value to set for the permissions property.
         */
        set: function (value) {
            this._permissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionGrantConditionSet.prototype, "permissionType", {
        /**
         * Gets the permissionType property value. The permission type of the permission being granted. Possible values: application for application permissions (e.g. app roles), or delegated for delegated permissions. The value delegatedUserConsentable indicates delegated permissions which have not been configured by the API publisher to require admin consent—this value may be used in built-in permission grant policies, but cannot be used in custom permission grant policies. Required.
         * @returns a permissionType
         */
        get: function () {
            return this._permissionType;
        },
        /**
         * Sets the permissionType property value. The permission type of the permission being granted. Possible values: application for application permissions (e.g. app roles), or delegated for delegated permissions. The value delegatedUserConsentable indicates delegated permissions which have not been configured by the API publisher to require admin consent—this value may be used in built-in permission grant policies, but cannot be used in custom permission grant policies. Required.
         * @param value Value to set for the permissionType property.
         */
        set: function (value) {
            this._permissionType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionGrantConditionSet.prototype, "resourceApplication", {
        /**
         * Gets the resourceApplication property value. The appId of the resource application (e.g. the API) for which a permission is being granted, or any to match with any resource application or API. Default is any.
         * @returns a string
         */
        get: function () {
            return this._resourceApplication;
        },
        /**
         * Sets the resourceApplication property value. The appId of the resource application (e.g. the API) for which a permission is being granted, or any to match with any resource application or API. Default is any.
         * @param value Value to set for the resourceApplication property.
         */
        set: function (value) {
            this._resourceApplication = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PermissionGrantConditionSet.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["clientApplicationIds", function (o, n) { o.clientApplicationIds = n.getCollectionOfPrimitiveValues(); }],
            ["clientApplicationPublisherIds", function (o, n) { o.clientApplicationPublisherIds = n.getCollectionOfPrimitiveValues(); }],
            ["clientApplicationsFromVerifiedPublisherOnly", function (o, n) { o.clientApplicationsFromVerifiedPublisherOnly = n.getBooleanValue(); }],
            ["clientApplicationTenantIds", function (o, n) { o.clientApplicationTenantIds = n.getCollectionOfPrimitiveValues(); }],
            ["permissionClassification", function (o, n) { o.permissionClassification = n.getStringValue(); }],
            ["permissions", function (o, n) { o.permissions = n.getCollectionOfPrimitiveValues(); }],
            ["permissionType", function (o, n) { o.permissionType = n.getObjectValue(PermissionType); }],
            ["resourceApplication", function (o, n) { o.resourceApplication = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PermissionGrantConditionSet.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfPrimitiveValues("clientApplicationIds", this.clientApplicationIds);
        writer.writeCollectionOfPrimitiveValues("clientApplicationPublisherIds", this.clientApplicationPublisherIds);
        writer.writeBooleanValue("clientApplicationsFromVerifiedPublisherOnly", this.clientApplicationsFromVerifiedPublisherOnly);
        writer.writeCollectionOfPrimitiveValues("clientApplicationTenantIds", this.clientApplicationTenantIds);
        writer.writeStringValue("permissionClassification", this.permissionClassification);
        writer.writeCollectionOfPrimitiveValues("permissions", this.permissions);
        writer.writeObjectValue("permissionType", this.permissionType);
        writer.writeStringValue("resourceApplication", this.resourceApplication);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return PermissionGrantConditionSet;
}(entity_1.Entity));
exports.PermissionGrantConditionSet = PermissionGrantConditionSet;
