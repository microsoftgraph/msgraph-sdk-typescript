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
exports.RoleDefinition = void 0;
var entity_1 = require("../entity");
var roleAssignment_1 = require("./roleAssignment");
var RoleDefinition = /** @class */ (function (_super) {
    __extends(RoleDefinition, _super);
    /**
     * Instantiates a new roleDefinition and sets the default values.
     */
    function RoleDefinition() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(RoleDefinition.prototype, "description", {
        /**
         * Gets the description property value. Description of the Role definition.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description of the Role definition.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RoleDefinition.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display Name of the Role definition.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display Name of the Role definition.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RoleDefinition.prototype, "isBuiltIn", {
        /**
         * Gets the isBuiltIn property value. Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition.
         * @returns a boolean
         */
        get: function () {
            return this._isBuiltIn;
        },
        /**
         * Sets the isBuiltIn property value. Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition.
         * @param value Value to set for the isBuiltIn property.
         */
        set: function (value) {
            this._isBuiltIn = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RoleDefinition.prototype, "roleAssignments", {
        /**
         * Gets the roleAssignments property value. List of Role assignments for this role definition.
         * @returns a roleAssignment
         */
        get: function () {
            return this._roleAssignments;
        },
        /**
         * Sets the roleAssignments property value. List of Role assignments for this role definition.
         * @param value Value to set for the roleAssignments property.
         */
        set: function (value) {
            this._roleAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RoleDefinition.prototype, "rolePermissions", {
        /**
         * Gets the rolePermissions property value. List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission.
         * @returns a rolePermission
         */
        get: function () {
            return this._rolePermissions;
        },
        /**
         * Sets the rolePermissions property value. List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission.
         * @param value Value to set for the rolePermissions property.
         */
        set: function (value) {
            this._rolePermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    RoleDefinition.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["isBuiltIn", function (o, n) { o.isBuiltIn = n.getBooleanValue(); }],
            ["roleAssignments", function (o, n) { o.roleAssignments = n.getCollectionOfObjectValues(roleAssignment_1.RoleAssignment); }],
            ["rolePermissions", function (o, n) { o.rolePermissions = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    RoleDefinition.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        writer.writeCollectionOfObjectValues("roleAssignments", this.roleAssignments);
        writer.writeCollectionOfPrimitiveValues("rolePermissions", this.rolePermissions);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return RoleDefinition;
}(entity_1.Entity));
exports.RoleDefinition = RoleDefinition;
