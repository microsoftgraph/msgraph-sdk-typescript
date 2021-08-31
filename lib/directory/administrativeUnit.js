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
exports.AdministrativeUnit = void 0;
var directoryObject_1 = require("../directoryObject");
var extension_1 = require("../extension");
var scopedRoleMembership_1 = require("../scopedRoleMembership");
var AdministrativeUnit = /** @class */ (function (_super) {
    __extends(AdministrativeUnit, _super);
    /**
     * Instantiates a new administrativeUnit and sets the default values.
     */
    function AdministrativeUnit() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AdministrativeUnit.prototype, "description", {
        /**
         * Gets the description property value. An optional description for the administrative unit.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. An optional description for the administrative unit.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdministrativeUnit.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name for the administrative unit.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name for the administrative unit.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdministrativeUnit.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for this Administrative Unit. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for this Administrative Unit. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdministrativeUnit.prototype, "members", {
        /**
         * Gets the members property value. Users and groups that are members of this Adminsitrative Unit. HTTP Methods: GET (list members), POST (add members), DELETE (remove members).
         * @returns a directoryObject
         */
        get: function () {
            return this._members;
        },
        /**
         * Sets the members property value. Users and groups that are members of this Adminsitrative Unit. HTTP Methods: GET (list members), POST (add members), DELETE (remove members).
         * @param value Value to set for the members property.
         */
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdministrativeUnit.prototype, "scopedRoleMembers", {
        /**
         * Gets the scopedRoleMembers property value. Scoped-role members of this Administrative Unit.  HTTP Methods: GET (list scopedRoleMemberships), POST (add scopedRoleMembership), DELETE (remove scopedRoleMembership).
         * @returns a scopedRoleMembership
         */
        get: function () {
            return this._scopedRoleMembers;
        },
        /**
         * Sets the scopedRoleMembers property value. Scoped-role members of this Administrative Unit.  HTTP Methods: GET (list scopedRoleMemberships), POST (add scopedRoleMembership), DELETE (remove scopedRoleMembership).
         * @param value Value to set for the scopedRoleMembers property.
         */
        set: function (value) {
            this._scopedRoleMembers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdministrativeUnit.prototype, "visibility", {
        /**
         * Gets the visibility property value. Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership or Public. If not set, default behavior is Public. When set to HiddenMembership, only members of the administrative unit can list other members of the administrative unit.
         * @returns a string
         */
        get: function () {
            return this._visibility;
        },
        /**
         * Sets the visibility property value. Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership or Public. If not set, default behavior is Public. When set to HiddenMembership, only members of the administrative unit can list other members of the administrative unit.
         * @param value Value to set for the visibility property.
         */
        set: function (value) {
            this._visibility = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AdministrativeUnit.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["members", function (o, n) { o.members = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["scopedRoleMembers", function (o, n) { o.scopedRoleMembers = n.getCollectionOfObjectValues(scopedRoleMembership_1.ScopedRoleMembership); }],
            ["visibility", function (o, n) { o.visibility = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AdministrativeUnit.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeCollectionOfObjectValues("members", this.members);
        writer.writeCollectionOfObjectValues("scopedRoleMembers", this.scopedRoleMembers);
        writer.writeStringValue("visibility", this.visibility);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return AdministrativeUnit;
}(directoryObject_1.DirectoryObject));
exports.AdministrativeUnit = AdministrativeUnit;
