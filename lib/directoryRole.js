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
exports.DirectoryRole = void 0;
var directoryObject_1 = require("./directoryObject");
var scopedRoleMembership_1 = require("./scopedRoleMembership");
var DirectoryRole = /** @class */ (function (_super) {
    __extends(DirectoryRole, _super);
    /**
     * Instantiates a new directoryRole and sets the default values.
     */
    function DirectoryRole() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DirectoryRole.prototype, "description", {
        /**
         * Gets the description property value. The description for the directory role. Read-only.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. The description for the directory role. Read-only.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryRole.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name for the directory role. Read-only.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name for the directory role. Read-only.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryRole.prototype, "members", {
        /**
         * Gets the members property value. Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable.
         * @returns a directoryObject
         */
        get: function () {
            return this._members;
        },
        /**
         * Sets the members property value. Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable.
         * @param value Value to set for the members property.
         */
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryRole.prototype, "roleTemplateId", {
        /**
         * Gets the roleTemplateId property value. The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only.
         * @returns a string
         */
        get: function () {
            return this._roleTemplateId;
        },
        /**
         * Sets the roleTemplateId property value. The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only.
         * @param value Value to set for the roleTemplateId property.
         */
        set: function (value) {
            this._roleTemplateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryRole.prototype, "scopedMembers", {
        /**
         * Gets the scopedMembers property value. Members of this directory role that are scoped to administrative units. Read-only. Nullable.
         * @returns a scopedRoleMembership
         */
        get: function () {
            return this._scopedMembers;
        },
        /**
         * Sets the scopedMembers property value. Members of this directory role that are scoped to administrative units. Read-only. Nullable.
         * @param value Value to set for the scopedMembers property.
         */
        set: function (value) {
            this._scopedMembers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DirectoryRole.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["members", function (o, n) { o.members = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["roleTemplateId", function (o, n) { o.roleTemplateId = n.getStringValue(); }],
            ["scopedMembers", function (o, n) { o.scopedMembers = n.getCollectionOfObjectValues(scopedRoleMembership_1.ScopedRoleMembership); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DirectoryRole.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("members", this.members);
        writer.writeStringValue("roleTemplateId", this.roleTemplateId);
        writer.writeCollectionOfObjectValues("scopedMembers", this.scopedMembers);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return DirectoryRole;
}(directoryObject_1.DirectoryObject));
exports.DirectoryRole = DirectoryRole;
