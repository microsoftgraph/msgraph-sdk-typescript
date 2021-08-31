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
exports.Shift = void 0;
var changeTrackedEntity_1 = require("./teamwork/changeTrackedEntity");
var Shift = /** @class */ (function (_super) {
    __extends(Shift, _super);
    /**
     * Instantiates a new shift and sets the default values.
     */
    function Shift() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Shift.prototype, "draftShift", {
        /**
         * Gets the draftShift property value. The draft version of this shift that is viewable by managers. Required.
         * @returns a shiftItem
         */
        get: function () {
            return this._draftShift;
        },
        /**
         * Sets the draftShift property value. The draft version of this shift that is viewable by managers. Required.
         * @param value Value to set for the draftShift property.
         */
        set: function (value) {
            this._draftShift = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Shift.prototype, "schedulingGroupId", {
        /**
         * Gets the schedulingGroupId property value. ID of the scheduling group the shift is part of. Required.
         * @returns a string
         */
        get: function () {
            return this._schedulingGroupId;
        },
        /**
         * Sets the schedulingGroupId property value. ID of the scheduling group the shift is part of. Required.
         * @param value Value to set for the schedulingGroupId property.
         */
        set: function (value) {
            this._schedulingGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Shift.prototype, "sharedShift", {
        /**
         * Gets the sharedShift property value. The shared version of this shift that is viewable by both employees and managers. Required.
         * @returns a shiftItem
         */
        get: function () {
            return this._sharedShift;
        },
        /**
         * Sets the sharedShift property value. The shared version of this shift that is viewable by both employees and managers. Required.
         * @param value Value to set for the sharedShift property.
         */
        set: function (value) {
            this._sharedShift = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Shift.prototype, "userId", {
        /**
         * Gets the userId property value. ID of the user assigned to the shift. Required.
         * @returns a string
         */
        get: function () {
            return this._userId;
        },
        /**
         * Sets the userId property value. ID of the user assigned to the shift. Required.
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
    Shift.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["draftShift", function (o, n) { o.draftShift = n.getObjectValue(ShiftItem); }],
            ["schedulingGroupId", function (o, n) { o.schedulingGroupId = n.getStringValue(); }],
            ["sharedShift", function (o, n) { o.sharedShift = n.getObjectValue(ShiftItem); }],
            ["userId", function (o, n) { o.userId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Shift.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("draftShift", this.draftShift);
        writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        writer.writeObjectValue("sharedShift", this.sharedShift);
        writer.writeStringValue("userId", this.userId);
    };
    ;
    ;
    ;
    ;
    ;
    return Shift;
}(changeTrackedEntity_1.ChangeTrackedEntity));
exports.Shift = Shift;
