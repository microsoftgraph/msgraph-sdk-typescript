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
exports.RoleAssignment = void 0;
var entity_1 = require("../entity");
var roleDefinition_1 = require("./roleDefinition");
var RoleAssignment = /** @class */ (function (_super) {
    __extends(RoleAssignment, _super);
    /**
     * Instantiates a new roleAssignment and sets the default values.
     */
    function RoleAssignment() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(RoleAssignment.prototype, "description", {
        /**
         * Gets the description property value. Description of the Role Assignment.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description of the Role Assignment.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RoleAssignment.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display or friendly name of the role Assignment.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display or friendly name of the role Assignment.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RoleAssignment.prototype, "resourceScopes", {
        /**
         * Gets the resourceScopes property value. List of ids of role scope member security groups.  These are IDs from Azure Active Directory.
         * @returns a string
         */
        get: function () {
            return this._resourceScopes;
        },
        /**
         * Sets the resourceScopes property value. List of ids of role scope member security groups.  These are IDs from Azure Active Directory.
         * @param value Value to set for the resourceScopes property.
         */
        set: function (value) {
            this._resourceScopes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RoleAssignment.prototype, "roleDefinition", {
        /**
         * Gets the roleDefinition property value. Role definition this assignment is part of.
         * @returns a roleDefinition
         */
        get: function () {
            return this._roleDefinition;
        },
        /**
         * Sets the roleDefinition property value. Role definition this assignment is part of.
         * @param value Value to set for the roleDefinition property.
         */
        set: function (value) {
            this._roleDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    RoleAssignment.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["resourceScopes", function (o, n) { o.resourceScopes = n.getCollectionOfPrimitiveValues(); }],
            ["roleDefinition", function (o, n) { o.roleDefinition = n.getObjectValue(roleDefinition_1.RoleDefinition); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    RoleAssignment.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues("resourceScopes", this.resourceScopes);
        writer.writeObjectValue("roleDefinition", this.roleDefinition);
    };
    ;
    ;
    ;
    ;
    ;
    return RoleAssignment;
}(entity_1.Entity));
exports.RoleAssignment = RoleAssignment;
