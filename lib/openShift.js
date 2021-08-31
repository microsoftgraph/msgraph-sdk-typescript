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
exports.OpenShift = void 0;
var changeTrackedEntity_1 = require("./teamwork/changeTrackedEntity");
var OpenShift = /** @class */ (function (_super) {
    __extends(OpenShift, _super);
    /**
     * Instantiates a new openShift and sets the default values.
     */
    function OpenShift() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OpenShift.prototype, "draftOpenShift", {
        /**
         * Gets the draftOpenShift property value. An unpublished open shift.
         * @returns a openShiftItem
         */
        get: function () {
            return this._draftOpenShift;
        },
        /**
         * Sets the draftOpenShift property value. An unpublished open shift.
         * @param value Value to set for the draftOpenShift property.
         */
        set: function (value) {
            this._draftOpenShift = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OpenShift.prototype, "schedulingGroupId", {
        /**
         * Gets the schedulingGroupId property value. ID for the scheduling group that the open shift belongs to.
         * @returns a string
         */
        get: function () {
            return this._schedulingGroupId;
        },
        /**
         * Sets the schedulingGroupId property value. ID for the scheduling group that the open shift belongs to.
         * @param value Value to set for the schedulingGroupId property.
         */
        set: function (value) {
            this._schedulingGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OpenShift.prototype, "sharedOpenShift", {
        /**
         * Gets the sharedOpenShift property value. A published open shift.
         * @returns a openShiftItem
         */
        get: function () {
            return this._sharedOpenShift;
        },
        /**
         * Sets the sharedOpenShift property value. A published open shift.
         * @param value Value to set for the sharedOpenShift property.
         */
        set: function (value) {
            this._sharedOpenShift = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OpenShift.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["draftOpenShift", function (o, n) { o.draftOpenShift = n.getObjectValue(OpenShiftItem); }],
            ["schedulingGroupId", function (o, n) { o.schedulingGroupId = n.getStringValue(); }],
            ["sharedOpenShift", function (o, n) { o.sharedOpenShift = n.getObjectValue(OpenShiftItem); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OpenShift.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("draftOpenShift", this.draftOpenShift);
        writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        writer.writeObjectValue("sharedOpenShift", this.sharedOpenShift);
    };
    ;
    ;
    ;
    ;
    return OpenShift;
}(changeTrackedEntity_1.ChangeTrackedEntity));
exports.OpenShift = OpenShift;
