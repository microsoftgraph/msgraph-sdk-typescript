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
exports.DeviceCompliancePolicyState = void 0;
var entity_1 = require("../entity");
var DeviceCompliancePolicyState = /** @class */ (function (_super) {
    __extends(DeviceCompliancePolicyState, _super);
    /**
     * Instantiates a new deviceCompliancePolicyState and sets the default values.
     */
    function DeviceCompliancePolicyState() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceCompliancePolicyState.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the policy for this policyBase
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the policy for this policyBase
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicyState.prototype, "platformType", {
        /**
         * Gets the platformType property value. Platform type that the policy applies to
         * @returns a policyPlatformType
         */
        get: function () {
            return this._platformType;
        },
        /**
         * Sets the platformType property value. Platform type that the policy applies to
         * @param value Value to set for the platformType property.
         */
        set: function (value) {
            this._platformType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicyState.prototype, "settingCount", {
        /**
         * Gets the settingCount property value. Count of how many setting a policy holds
         * @returns a integer
         */
        get: function () {
            return this._settingCount;
        },
        /**
         * Sets the settingCount property value. Count of how many setting a policy holds
         * @param value Value to set for the settingCount property.
         */
        set: function (value) {
            this._settingCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicyState.prototype, "settingStates", {
        /**
         * Gets the settingStates property value.
         * @returns a deviceCompliancePolicySettingState
         */
        get: function () {
            return this._settingStates;
        },
        /**
         * Sets the settingStates property value.
         * @param value Value to set for the settingStates property.
         */
        set: function (value) {
            this._settingStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicyState.prototype, "state", {
        /**
         * Gets the state property value. The compliance state of the policy
         * @returns a complianceStatus
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. The compliance state of the policy
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicyState.prototype, "version", {
        /**
         * Gets the version property value. The version of the policy
         * @returns a integer
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. The version of the policy
         * @param value Value to set for the version property.
         */
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceCompliancePolicyState.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["platformType", function (o, n) { o.platformType = n.getObjectValue(PolicyPlatformType); }],
            ["settingCount", function (o, n) { o.settingCount = n.getNumberValue(); }],
            ["settingStates", function (o, n) { o.settingStates = n.getCollectionOfPrimitiveValues(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(ComplianceStatus); }],
            ["version", function (o, n) { o.version = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceCompliancePolicyState.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("platformType", this.platformType);
        writer.writeNumberValue("settingCount", this.settingCount);
        writer.writeCollectionOfPrimitiveValues("settingStates", this.settingStates);
        writer.writeObjectValue("state", this.state);
        writer.writeNumberValue("version", this.version);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return DeviceCompliancePolicyState;
}(entity_1.Entity));
exports.DeviceCompliancePolicyState = DeviceCompliancePolicyState;
