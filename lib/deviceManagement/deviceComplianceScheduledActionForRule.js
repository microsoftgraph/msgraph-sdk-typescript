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
exports.DeviceComplianceScheduledActionForRule = void 0;
var entity_1 = require("../entity");
var deviceComplianceActionItem_1 = require("./deviceCompliancePolicies/deviceComplianceActionItem");
var DeviceComplianceScheduledActionForRule = /** @class */ (function (_super) {
    __extends(DeviceComplianceScheduledActionForRule, _super);
    /**
     * Instantiates a new deviceComplianceScheduledActionForRule and sets the default values.
     */
    function DeviceComplianceScheduledActionForRule() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceComplianceScheduledActionForRule.prototype, "ruleName", {
        /**
         * Gets the ruleName property value. Name of the rule which this scheduled action applies to.
         * @returns a string
         */
        get: function () {
            return this._ruleName;
        },
        /**
         * Sets the ruleName property value. Name of the rule which this scheduled action applies to.
         * @param value Value to set for the ruleName property.
         */
        set: function (value) {
            this._ruleName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceScheduledActionForRule.prototype, "scheduledActionConfigurations", {
        /**
         * Gets the scheduledActionConfigurations property value. The list of scheduled action configurations for this compliance policy.
         * @returns a deviceComplianceActionItem
         */
        get: function () {
            return this._scheduledActionConfigurations;
        },
        /**
         * Sets the scheduledActionConfigurations property value. The list of scheduled action configurations for this compliance policy.
         * @param value Value to set for the scheduledActionConfigurations property.
         */
        set: function (value) {
            this._scheduledActionConfigurations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceComplianceScheduledActionForRule.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["ruleName", function (o, n) { o.ruleName = n.getStringValue(); }],
            ["scheduledActionConfigurations", function (o, n) { o.scheduledActionConfigurations = n.getCollectionOfObjectValues(deviceComplianceActionItem_1.DeviceComplianceActionItem); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceComplianceScheduledActionForRule.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("ruleName", this.ruleName);
        writer.writeCollectionOfObjectValues("scheduledActionConfigurations", this.scheduledActionConfigurations);
    };
    ;
    ;
    ;
    return DeviceComplianceScheduledActionForRule;
}(entity_1.Entity));
exports.DeviceComplianceScheduledActionForRule = DeviceComplianceScheduledActionForRule;
