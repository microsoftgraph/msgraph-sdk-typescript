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
exports.Permission = void 0;
var entity_1 = require("./entity");
var identitySet_1 = require("./identitySet");
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    /**
     * Instantiates a new permission and sets the default values.
     */
    function Permission() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Permission.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional.
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional.
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Permission.prototype, "grantedTo", {
        /**
         * Gets the grantedTo property value. For user type permissions, the details of the users & applications for this permission. Read-only.
         * @returns a identitySet
         */
        get: function () {
            return this._grantedTo;
        },
        /**
         * Sets the grantedTo property value. For user type permissions, the details of the users & applications for this permission. Read-only.
         * @param value Value to set for the grantedTo property.
         */
        set: function (value) {
            this._grantedTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Permission.prototype, "grantedToIdentities", {
        /**
         * Gets the grantedToIdentities property value. For link type permissions, the details of the users to whom permission was granted. Read-only.
         * @returns a identitySet
         */
        get: function () {
            return this._grantedToIdentities;
        },
        /**
         * Sets the grantedToIdentities property value. For link type permissions, the details of the users to whom permission was granted. Read-only.
         * @param value Value to set for the grantedToIdentities property.
         */
        set: function (value) {
            this._grantedToIdentities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Permission.prototype, "hasPassword", {
        /**
         * Gets the hasPassword property value. This indicates whether password is set for this permission, it's only showing in response. Optional and Read-only and for OneDrive Personal only.
         * @returns a boolean
         */
        get: function () {
            return this._hasPassword;
        },
        /**
         * Sets the hasPassword property value. This indicates whether password is set for this permission, it's only showing in response. Optional and Read-only and for OneDrive Personal only.
         * @param value Value to set for the hasPassword property.
         */
        set: function (value) {
            this._hasPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Permission.prototype, "inheritedFrom", {
        /**
         * Gets the inheritedFrom property value. Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.
         * @returns a itemReference
         */
        get: function () {
            return this._inheritedFrom;
        },
        /**
         * Sets the inheritedFrom property value. Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.
         * @param value Value to set for the inheritedFrom property.
         */
        set: function (value) {
            this._inheritedFrom = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Permission.prototype, "invitation", {
        /**
         * Gets the invitation property value. Details of any associated sharing invitation for this permission. Read-only.
         * @returns a sharingInvitation
         */
        get: function () {
            return this._invitation;
        },
        /**
         * Sets the invitation property value. Details of any associated sharing invitation for this permission. Read-only.
         * @param value Value to set for the invitation property.
         */
        set: function (value) {
            this._invitation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Permission.prototype, "link", {
        /**
         * Gets the link property value. Provides the link details of the current permission, if it is a link type permissions. Read-only.
         * @returns a sharingLink
         */
        get: function () {
            return this._link;
        },
        /**
         * Sets the link property value. Provides the link details of the current permission, if it is a link type permissions. Read-only.
         * @param value Value to set for the link property.
         */
        set: function (value) {
            this._link = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Permission.prototype, "roles", {
        /**
         * Gets the roles property value. The type of permission, e.g. read. See below for the full list of roles. Read-only.
         * @returns a string
         */
        get: function () {
            return this._roles;
        },
        /**
         * Sets the roles property value. The type of permission, e.g. read. See below for the full list of roles. Read-only.
         * @param value Value to set for the roles property.
         */
        set: function (value) {
            this._roles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Permission.prototype, "shareId", {
        /**
         * Gets the shareId property value. A unique token that can be used to access this shared item via the [shares API][]. Read-only.
         * @returns a string
         */
        get: function () {
            return this._shareId;
        },
        /**
         * Sets the shareId property value. A unique token that can be used to access this shared item via the [shares API][]. Read-only.
         * @param value Value to set for the shareId property.
         */
        set: function (value) {
            this._shareId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Permission.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["grantedTo", function (o, n) { o.grantedTo = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["grantedToIdentities", function (o, n) { o.grantedToIdentities = n.getCollectionOfObjectValues(identitySet_1.IdentitySet); }],
            ["hasPassword", function (o, n) { o.hasPassword = n.getBooleanValue(); }],
            ["inheritedFrom", function (o, n) { o.inheritedFrom = n.getObjectValue(ItemReference); }],
            ["invitation", function (o, n) { o.invitation = n.getObjectValue(SharingInvitation); }],
            ["link", function (o, n) { o.link = n.getObjectValue(SharingLink); }],
            ["roles", function (o, n) { o.roles = n.getCollectionOfPrimitiveValues(); }],
            ["shareId", function (o, n) { o.shareId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Permission.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeObjectValue("grantedTo", this.grantedTo);
        writer.writeCollectionOfObjectValues("grantedToIdentities", this.grantedToIdentities);
        writer.writeBooleanValue("hasPassword", this.hasPassword);
        writer.writeObjectValue("inheritedFrom", this.inheritedFrom);
        writer.writeObjectValue("invitation", this.invitation);
        writer.writeObjectValue("link", this.link);
        writer.writeCollectionOfPrimitiveValues("roles", this.roles);
        writer.writeStringValue("shareId", this.shareId);
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
    ;
    return Permission;
}(entity_1.Entity));
exports.Permission = Permission;
