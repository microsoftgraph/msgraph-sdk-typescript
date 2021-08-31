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
exports.TimeOff = void 0;
var changeTrackedEntity_1 = require("./teamwork/changeTrackedEntity");
var TimeOff = /** @class */ (function (_super) {
    __extends(TimeOff, _super);
    /**
     * Instantiates a new timeOff and sets the default values.
     */
    function TimeOff() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TimeOff.prototype, "draftTimeOff", {
        /**
         * Gets the draftTimeOff property value. The draft version of this timeOff that is viewable by managers. Required.
         * @returns a timeOffItem
         */
        get: function () {
            return this._draftTimeOff;
        },
        /**
         * Sets the draftTimeOff property value. The draft version of this timeOff that is viewable by managers. Required.
         * @param value Value to set for the draftTimeOff property.
         */
        set: function (value) {
            this._draftTimeOff = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TimeOff.prototype, "sharedTimeOff", {
        /**
         * Gets the sharedTimeOff property value. The shared version of this timeOff that is viewable by both employees and managers. Required.
         * @returns a timeOffItem
         */
        get: function () {
            return this._sharedTimeOff;
        },
        /**
         * Sets the sharedTimeOff property value. The shared version of this timeOff that is viewable by both employees and managers. Required.
         * @param value Value to set for the sharedTimeOff property.
         */
        set: function (value) {
            this._sharedTimeOff = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TimeOff.prototype, "userId", {
        /**
         * Gets the userId property value. ID of the user assigned to the timeOff. Required.
         * @returns a string
         */
        get: function () {
            return this._userId;
        },
        /**
         * Sets the userId property value. ID of the user assigned to the timeOff. Required.
         * @param value Value to set for the userId property.
         */
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TimeOff.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["draftTimeOff", function (o, n) { o.draftTimeOff = n.getObjectValue(TimeOffItem); }],
            ["sharedTimeOff", function (o, n) { o.sharedTimeOff = n.getObjectValue(TimeOffItem); }],
            ["userId", function (o, n) { o.userId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TimeOff.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("draftTimeOff", this.draftTimeOff);
        writer.writeObjectValue("sharedTimeOff", this.sharedTimeOff);
        writer.writeStringValue("userId", this.userId);
    };
    ;
    ;
    ;
    ;
    return TimeOff;
}(changeTrackedEntity_1.ChangeTrackedEntity));
exports.TimeOff = TimeOff;
