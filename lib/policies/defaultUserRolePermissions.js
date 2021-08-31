"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultUserRolePermissions = void 0;
var DefaultUserRolePermissions = /** @class */ (function () {
    /**
     * Instantiates a new defaultUserRolePermissions and sets the default values.
     */
    function DefaultUserRolePermissions() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(DefaultUserRolePermissions.prototype, "additionalData", {
        /**
         * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @returns a Map<string, unknown>
         */
        get: function () {
            return this._additionalData;
        },
        /**
         * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @param value Value to set for the AdditionalData property.
         */
        set: function (value) {
            this._additionalData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultUserRolePermissions.prototype, "allowedToCreateApps", {
        /**
         * Gets the allowedToCreateApps property value. Indicates whether the default user role can create applications.
         * @returns a boolean
         */
        get: function () {
            return this._allowedToCreateApps;
        },
        /**
         * Sets the allowedToCreateApps property value. Indicates whether the default user role can create applications.
         * @param value Value to set for the allowedToCreateApps property.
         */
        set: function (value) {
            this._allowedToCreateApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultUserRolePermissions.prototype, "allowedToCreateSecurityGroups", {
        /**
         * Gets the allowedToCreateSecurityGroups property value. Indicates whether the default user role can create security groups.
         * @returns a boolean
         */
        get: function () {
            return this._allowedToCreateSecurityGroups;
        },
        /**
         * Sets the allowedToCreateSecurityGroups property value. Indicates whether the default user role can create security groups.
         * @param value Value to set for the allowedToCreateSecurityGroups property.
         */
        set: function (value) {
            this._allowedToCreateSecurityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultUserRolePermissions.prototype, "allowedToReadOtherUsers", {
        /**
         * Gets the allowedToReadOtherUsers property value. Indicates whether the default user role can read other users.
         * @returns a boolean
         */
        get: function () {
            return this._allowedToReadOtherUsers;
        },
        /**
         * Sets the allowedToReadOtherUsers property value. Indicates whether the default user role can read other users.
         * @param value Value to set for the allowedToReadOtherUsers property.
         */
        set: function (value) {
            this._allowedToReadOtherUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultUserRolePermissions.prototype, "permissionGrantPoliciesAssigned", {
        /**
         * Gets the permissionGrantPoliciesAssigned property value. Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list indicates user consent to apps is disabled.
         * @returns a string
         */
        get: function () {
            return this._permissionGrantPoliciesAssigned;
        },
        /**
         * Sets the permissionGrantPoliciesAssigned property value. Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list indicates user consent to apps is disabled.
         * @param value Value to set for the permissionGrantPoliciesAssigned property.
         */
        set: function (value) {
            this._permissionGrantPoliciesAssigned = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DefaultUserRolePermissions.prototype.getFieldDeserializers = function () {
        return new Map([
            ["allowedToCreateApps", function (o, n) { o.allowedToCreateApps = n.getBooleanValue(); }],
            ["allowedToCreateSecurityGroups", function (o, n) { o.allowedToCreateSecurityGroups = n.getBooleanValue(); }],
            ["allowedToReadOtherUsers", function (o, n) { o.allowedToReadOtherUsers = n.getBooleanValue(); }],
            ["permissionGrantPoliciesAssigned", function (o, n) { o.permissionGrantPoliciesAssigned = n.getCollectionOfPrimitiveValues(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DefaultUserRolePermissions.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowedToCreateApps", this.allowedToCreateApps);
        writer.writeBooleanValue("allowedToCreateSecurityGroups", this.allowedToCreateSecurityGroups);
        writer.writeBooleanValue("allowedToReadOtherUsers", this.allowedToReadOtherUsers);
        writer.writeCollectionOfPrimitiveValues("permissionGrantPoliciesAssigned", this.permissionGrantPoliciesAssigned);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return DefaultUserRolePermissions;
}());
exports.DefaultUserRolePermissions = DefaultUserRolePermissions;
