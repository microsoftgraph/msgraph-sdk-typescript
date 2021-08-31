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
exports.TargetedManagedAppProtection = void 0;
var managedAppProtection_1 = require("./managedAppProtection");
var targetedManagedAppPolicyAssignment_1 = require("./targetedManagedAppPolicyAssignment");
var TargetedManagedAppProtection = /** @class */ (function (_super) {
    __extends(TargetedManagedAppProtection, _super);
    /**
     * Instantiates a new targetedManagedAppProtection and sets the default values.
     */
    function TargetedManagedAppProtection() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TargetedManagedAppProtection.prototype, "assignments", {
        /**
         * Gets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
         * @returns a targetedManagedAppPolicyAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TargetedManagedAppProtection.prototype, "isAssigned", {
        /**
         * Gets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
         * @returns a boolean
         */
        get: function () {
            return this._isAssigned;
        },
        /**
         * Sets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
         * @param value Value to set for the isAssigned property.
         */
        set: function (value) {
            this._isAssigned = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TargetedManagedAppProtection.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(targetedManagedAppPolicyAssignment_1.TargetedManagedAppPolicyAssignment); }],
            ["isAssigned", function (o, n) { o.isAssigned = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TargetedManagedAppProtection.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeBooleanValue("isAssigned", this.isAssigned);
    };
    ;
    ;
    ;
    return TargetedManagedAppProtection;
}(managedAppProtection_1.ManagedAppProtection));
exports.TargetedManagedAppProtection = TargetedManagedAppProtection;
