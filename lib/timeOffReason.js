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
exports.TimeOffReason = void 0;
var changeTrackedEntity_1 = require("./teamwork/changeTrackedEntity");
var TimeOffReason = /** @class */ (function (_super) {
    __extends(TimeOffReason, _super);
    /**
     * Instantiates a new timeOffReason and sets the default values.
     */
    function TimeOffReason() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TimeOffReason.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the timeOffReason. Required.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the timeOffReason. Required.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TimeOffReason.prototype, "iconType", {
        /**
         * Gets the iconType property value. Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required.
         * @returns a timeOffReasonIconType
         */
        get: function () {
            return this._iconType;
        },
        /**
         * Sets the iconType property value. Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required.
         * @param value Value to set for the iconType property.
         */
        set: function (value) {
            this._iconType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TimeOffReason.prototype, "isActive", {
        /**
         * Gets the isActive property value. Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required.
         * @returns a boolean
         */
        get: function () {
            return this._isActive;
        },
        /**
         * Sets the isActive property value. Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required.
         * @param value Value to set for the isActive property.
         */
        set: function (value) {
            this._isActive = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TimeOffReason.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["iconType", function (o, n) { o.iconType = n.getObjectValue(TimeOffReasonIconType); }],
            ["isActive", function (o, n) { o.isActive = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TimeOffReason.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("iconType", this.iconType);
        writer.writeBooleanValue("isActive", this.isActive);
    };
    ;
    ;
    ;
    ;
    return TimeOffReason;
}(changeTrackedEntity_1.ChangeTrackedEntity));
exports.TimeOffReason = TimeOffReason;
