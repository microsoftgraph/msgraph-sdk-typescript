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
exports.ScopedRoleMembership = void 0;
var entity_1 = require("./entity");
var identity_1 = require("./identity");
var ScopedRoleMembership = /** @class */ (function (_super) {
    __extends(ScopedRoleMembership, _super);
    /**
     * Instantiates a new scopedRoleMembership and sets the default values.
     */
    function ScopedRoleMembership() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ScopedRoleMembership.prototype, "administrativeUnitId", {
        /**
         * Gets the administrativeUnitId property value. Unique identifier for the administrative unit that the directory role is scoped to
         * @returns a string
         */
        get: function () {
            return this._administrativeUnitId;
        },
        /**
         * Sets the administrativeUnitId property value. Unique identifier for the administrative unit that the directory role is scoped to
         * @param value Value to set for the administrativeUnitId property.
         */
        set: function (value) {
            this._administrativeUnitId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScopedRoleMembership.prototype, "roleId", {
        /**
         * Gets the roleId property value. Unique identifier for the directory role that the member is in.
         * @returns a string
         */
        get: function () {
            return this._roleId;
        },
        /**
         * Sets the roleId property value. Unique identifier for the directory role that the member is in.
         * @param value Value to set for the roleId property.
         */
        set: function (value) {
            this._roleId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScopedRoleMembership.prototype, "roleMemberInfo", {
        /**
         * Gets the roleMemberInfo property value.
         * @returns a identity
         */
        get: function () {
            return this._roleMemberInfo;
        },
        /**
         * Sets the roleMemberInfo property value.
         * @param value Value to set for the roleMemberInfo property.
         */
        set: function (value) {
            this._roleMemberInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ScopedRoleMembership.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["administrativeUnitId", function (o, n) { o.administrativeUnitId = n.getStringValue(); }],
            ["roleId", function (o, n) { o.roleId = n.getStringValue(); }],
            ["roleMemberInfo", function (o, n) { o.roleMemberInfo = n.getObjectValue(identity_1.Identity); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ScopedRoleMembership.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("administrativeUnitId", this.administrativeUnitId);
        writer.writeStringValue("roleId", this.roleId);
        writer.writeObjectValue("roleMemberInfo", this.roleMemberInfo);
    };
    ;
    ;
    ;
    ;
    return ScopedRoleMembership;
}(entity_1.Entity));
exports.ScopedRoleMembership = ScopedRoleMembership;
