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
exports.PermissionGrantPolicy = void 0;
var policyBase_1 = require("../policyBase");
var permissionGrantConditionSet_1 = require("./permissionGrantConditionSet");
var PermissionGrantPolicy = /** @class */ (function (_super) {
    __extends(PermissionGrantPolicy, _super);
    /**
     * Instantiates a new permissionGrantPolicy and sets the default values.
     */
    function PermissionGrantPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PermissionGrantPolicy.prototype, "excludes", {
        /**
         * Gets the excludes property value. Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
         * @returns a permissionGrantConditionSet
         */
        get: function () {
            return this._excludes;
        },
        /**
         * Sets the excludes property value. Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
         * @param value Value to set for the excludes property.
         */
        set: function (value) {
            this._excludes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionGrantPolicy.prototype, "includes", {
        /**
         * Gets the includes property value. Condition sets which are included in this permission grant policy. Automatically expanded on GET.
         * @returns a permissionGrantConditionSet
         */
        get: function () {
            return this._includes;
        },
        /**
         * Sets the includes property value. Condition sets which are included in this permission grant policy. Automatically expanded on GET.
         * @param value Value to set for the includes property.
         */
        set: function (value) {
            this._includes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PermissionGrantPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["excludes", function (o, n) { o.excludes = n.getCollectionOfObjectValues(permissionGrantConditionSet_1.PermissionGrantConditionSet); }],
            ["includes", function (o, n) { o.includes = n.getCollectionOfObjectValues(permissionGrantConditionSet_1.PermissionGrantConditionSet); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PermissionGrantPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("excludes", this.excludes);
        writer.writeCollectionOfObjectValues("includes", this.includes);
    };
    ;
    ;
    ;
    return PermissionGrantPolicy;
}(policyBase_1.PolicyBase));
exports.PermissionGrantPolicy = PermissionGrantPolicy;
