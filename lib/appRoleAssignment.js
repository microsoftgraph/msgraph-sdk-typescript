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
exports.AppRoleAssignment = void 0;
var directoryObject_1 = require("./directoryObject");
var AppRoleAssignment = /** @class */ (function (_super) {
    __extends(AppRoleAssignment, _super);
    /**
     * Instantiates a new appRoleAssignment and sets the default values.
     */
    function AppRoleAssignment() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AppRoleAssignment.prototype, "appRoleId", {
        /**
         * Gets the appRoleId property value. The identifier (id) for the app role which is assigned to the principal. This app role must be exposed in the appRoles property on the resource application's service principal (resourceId). If the resource application has not declared any app roles, a default app role ID of 00000000-0000-0000-0000-000000000000 can be specified to signal that the principal is assigned to the resource app without any specific app roles. Required on create.
         * @returns a string
         */
        get: function () {
            return this._appRoleId;
        },
        /**
         * Sets the appRoleId property value. The identifier (id) for the app role which is assigned to the principal. This app role must be exposed in the appRoles property on the resource application's service principal (resourceId). If the resource application has not declared any app roles, a default app role ID of 00000000-0000-0000-0000-000000000000 can be specified to signal that the principal is assigned to the resource app without any specific app roles. Required on create.
         * @param value Value to set for the appRoleId property.
         */
        set: function (value) {
            this._appRoleId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRoleAssignment.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The time when the app role assignment was created.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The time when the app role assignment was created.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRoleAssignment.prototype, "principalDisplayName", {
        /**
         * Gets the principalDisplayName property value. The display name of the user, group, or service principal that was granted the app role assignment. Read-only. Supports $filter (eq and startswith).
         * @returns a string
         */
        get: function () {
            return this._principalDisplayName;
        },
        /**
         * Sets the principalDisplayName property value. The display name of the user, group, or service principal that was granted the app role assignment. Read-only. Supports $filter (eq and startswith).
         * @param value Value to set for the principalDisplayName property.
         */
        set: function (value) {
            this._principalDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRoleAssignment.prototype, "principalId", {
        /**
         * Gets the principalId property value. The unique identifier (id) for the user, group or service principal being granted the app role. Required on create.
         * @returns a string
         */
        get: function () {
            return this._principalId;
        },
        /**
         * Sets the principalId property value. The unique identifier (id) for the user, group or service principal being granted the app role. Required on create.
         * @param value Value to set for the principalId property.
         */
        set: function (value) {
            this._principalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRoleAssignment.prototype, "principalType", {
        /**
         * Gets the principalType property value. The type of the assigned principal. This can either be User, Group or ServicePrincipal. Read-only.
         * @returns a string
         */
        get: function () {
            return this._principalType;
        },
        /**
         * Sets the principalType property value. The type of the assigned principal. This can either be User, Group or ServicePrincipal. Read-only.
         * @param value Value to set for the principalType property.
         */
        set: function (value) {
            this._principalType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRoleAssignment.prototype, "resourceDisplayName", {
        /**
         * Gets the resourceDisplayName property value. The display name of the resource app's service principal to which the assignment is made.
         * @returns a string
         */
        get: function () {
            return this._resourceDisplayName;
        },
        /**
         * Sets the resourceDisplayName property value. The display name of the resource app's service principal to which the assignment is made.
         * @param value Value to set for the resourceDisplayName property.
         */
        set: function (value) {
            this._resourceDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRoleAssignment.prototype, "resourceId", {
        /**
         * Gets the resourceId property value. The unique identifier (id) for the resource service principal for which the assignment is made. Required on create. Supports $filter (eq only).
         * @returns a string
         */
        get: function () {
            return this._resourceId;
        },
        /**
         * Sets the resourceId property value. The unique identifier (id) for the resource service principal for which the assignment is made. Required on create. Supports $filter (eq only).
         * @param value Value to set for the resourceId property.
         */
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AppRoleAssignment.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appRoleId", function (o, n) { o.appRoleId = n.getStringValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["principalDisplayName", function (o, n) { o.principalDisplayName = n.getStringValue(); }],
            ["principalId", function (o, n) { o.principalId = n.getStringValue(); }],
            ["principalType", function (o, n) { o.principalType = n.getStringValue(); }],
            ["resourceDisplayName", function (o, n) { o.resourceDisplayName = n.getStringValue(); }],
            ["resourceId", function (o, n) { o.resourceId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AppRoleAssignment.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("appRoleId", this.appRoleId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("principalDisplayName", this.principalDisplayName);
        writer.writeStringValue("principalId", this.principalId);
        writer.writeStringValue("principalType", this.principalType);
        writer.writeStringValue("resourceDisplayName", this.resourceDisplayName);
        writer.writeStringValue("resourceId", this.resourceId);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return AppRoleAssignment;
}(directoryObject_1.DirectoryObject));
exports.AppRoleAssignment = AppRoleAssignment;
