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
exports.AuthorizationPolicy = void 0;
var policyBase_1 = require("../../policyBase");
var defaultUserRolePermissions_1 = require("../defaultUserRolePermissions");
var AuthorizationPolicy = /** @class */ (function (_super) {
    __extends(AuthorizationPolicy, _super);
    /**
     * Instantiates a new AuthorizationPolicy and sets the default values.
     */
    function AuthorizationPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AuthorizationPolicy.prototype, "allowedToSignUpEmailBasedSubscriptions", {
        /**
         * Gets the allowedToSignUpEmailBasedSubscriptions property value. Indicates whether users can sign up for email based subscriptions.
         * @returns a boolean
         */
        get: function () {
            return this._allowedToSignUpEmailBasedSubscriptions;
        },
        /**
         * Sets the allowedToSignUpEmailBasedSubscriptions property value. Indicates whether users can sign up for email based subscriptions.
         * @param value Value to set for the allowedToSignUpEmailBasedSubscriptions property.
         */
        set: function (value) {
            this._allowedToSignUpEmailBasedSubscriptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthorizationPolicy.prototype, "allowedToUseSSPR", {
        /**
         * Gets the allowedToUseSSPR property value. Indicates whether the Self-Serve Password Reset feature can be used by users on the tenant.
         * @returns a boolean
         */
        get: function () {
            return this._allowedToUseSSPR;
        },
        /**
         * Sets the allowedToUseSSPR property value. Indicates whether the Self-Serve Password Reset feature can be used by users on the tenant.
         * @param value Value to set for the allowedToUseSSPR property.
         */
        set: function (value) {
            this._allowedToUseSSPR = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthorizationPolicy.prototype, "allowEmailVerifiedUsersToJoinOrganization", {
        /**
         * Gets the allowEmailVerifiedUsersToJoinOrganization property value. Indicates whether a user can join the tenant by email validation.
         * @returns a boolean
         */
        get: function () {
            return this._allowEmailVerifiedUsersToJoinOrganization;
        },
        /**
         * Sets the allowEmailVerifiedUsersToJoinOrganization property value. Indicates whether a user can join the tenant by email validation.
         * @param value Value to set for the allowEmailVerifiedUsersToJoinOrganization property.
         */
        set: function (value) {
            this._allowEmailVerifiedUsersToJoinOrganization = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthorizationPolicy.prototype, "allowInvitesFrom", {
        /**
         * Gets the allowInvitesFrom property value. Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone.  everyone is the default setting for all cloud environments except US Government. See more in the table below.
         * @returns a allowInvitesFrom
         */
        get: function () {
            return this._allowInvitesFrom;
        },
        /**
         * Sets the allowInvitesFrom property value. Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone.  everyone is the default setting for all cloud environments except US Government. See more in the table below.
         * @param value Value to set for the allowInvitesFrom property.
         */
        set: function (value) {
            this._allowInvitesFrom = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthorizationPolicy.prototype, "blockMsolPowerShell", {
        /**
         * Gets the blockMsolPowerShell property value. To disable the use of MSOL PowerShell set this property to true. This will also disable user-based access to the legacy service endpoint used by MSOL PowerShell. This does not affect Azure AD Connect or Microsoft Graph.
         * @returns a boolean
         */
        get: function () {
            return this._blockMsolPowerShell;
        },
        /**
         * Sets the blockMsolPowerShell property value. To disable the use of MSOL PowerShell set this property to true. This will also disable user-based access to the legacy service endpoint used by MSOL PowerShell. This does not affect Azure AD Connect or Microsoft Graph.
         * @param value Value to set for the blockMsolPowerShell property.
         */
        set: function (value) {
            this._blockMsolPowerShell = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthorizationPolicy.prototype, "defaultUserRolePermissions", {
        /**
         * Gets the defaultUserRolePermissions property value.
         * @returns a defaultUserRolePermissions
         */
        get: function () {
            return this._defaultUserRolePermissions;
        },
        /**
         * Sets the defaultUserRolePermissions property value.
         * @param value Value to set for the defaultUserRolePermissions property.
         */
        set: function (value) {
            this._defaultUserRolePermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthorizationPolicy.prototype, "guestUserRoleId", {
        /**
         * Gets the guestUserRoleId property value. Represents role templateId for the role that should be granted to guest user. Refer to List unifiedRoleDefinitions to find the list of available role templates. Currently following roles are supported:  User (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User (2af84b1e-32c8-42b7-82bc-daa82404023b).
         * @returns a string
         */
        get: function () {
            return this._guestUserRoleId;
        },
        /**
         * Sets the guestUserRoleId property value. Represents role templateId for the role that should be granted to guest user. Refer to List unifiedRoleDefinitions to find the list of available role templates. Currently following roles are supported:  User (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User (2af84b1e-32c8-42b7-82bc-daa82404023b).
         * @param value Value to set for the guestUserRoleId property.
         */
        set: function (value) {
            this._guestUserRoleId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AuthorizationPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["allowedToSignUpEmailBasedSubscriptions", function (o, n) { o.allowedToSignUpEmailBasedSubscriptions = n.getBooleanValue(); }],
            ["allowedToUseSSPR", function (o, n) { o.allowedToUseSSPR = n.getBooleanValue(); }],
            ["allowEmailVerifiedUsersToJoinOrganization", function (o, n) { o.allowEmailVerifiedUsersToJoinOrganization = n.getBooleanValue(); }],
            ["allowInvitesFrom", function (o, n) { o.allowInvitesFrom = n.getObjectValue(AllowInvitesFrom); }],
            ["blockMsolPowerShell", function (o, n) { o.blockMsolPowerShell = n.getBooleanValue(); }],
            ["defaultUserRolePermissions", function (o, n) { o.defaultUserRolePermissions = n.getObjectValue(defaultUserRolePermissions_1.DefaultUserRolePermissions); }],
            ["guestUserRoleId", function (o, n) { o.guestUserRoleId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AuthorizationPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("allowedToSignUpEmailBasedSubscriptions", this.allowedToSignUpEmailBasedSubscriptions);
        writer.writeBooleanValue("allowedToUseSSPR", this.allowedToUseSSPR);
        writer.writeBooleanValue("allowEmailVerifiedUsersToJoinOrganization", this.allowEmailVerifiedUsersToJoinOrganization);
        writer.writeObjectValue("allowInvitesFrom", this.allowInvitesFrom);
        writer.writeBooleanValue("blockMsolPowerShell", this.blockMsolPowerShell);
        writer.writeObjectValue("defaultUserRolePermissions", this.defaultUserRolePermissions);
        writer.writeStringValue("guestUserRoleId", this.guestUserRoleId);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return AuthorizationPolicy;
}(policyBase_1.PolicyBase));
exports.AuthorizationPolicy = AuthorizationPolicy;
