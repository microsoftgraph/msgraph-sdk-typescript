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
exports.ThreatAssessmentResult = void 0;
var entity_1 = require("../entity");
var ThreatAssessmentResult = /** @class */ (function (_super) {
    __extends(ThreatAssessmentResult, _super);
    /**
     * Instantiates a new threatAssessmentResult and sets the default values.
     */
    function ThreatAssessmentResult() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ThreatAssessmentResult.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentResult.prototype, "message", {
        /**
         * Gets the message property value. The result message for each threat assessment.
         * @returns a string
         */
        get: function () {
            return this._message;
        },
        /**
         * Sets the message property value. The result message for each threat assessment.
         * @param value Value to set for the message property.
         */
        set: function (value) {
            this._message = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentResult.prototype, "resultType", {
        /**
         * Gets the resultType property value. The threat assessment result type. Possible values are: checkPolicy (only for mail assessment), rescan.
         * @returns a threatAssessmentResultType
         */
        get: function () {
            return this._resultType;
        },
        /**
         * Sets the resultType property value. The threat assessment result type. Possible values are: checkPolicy (only for mail assessment), rescan.
         * @param value Value to set for the resultType property.
         */
        set: function (value) {
            this._resultType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ThreatAssessmentResult.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["message", function (o, n) { o.message = n.getStringValue(); }],
            ["resultType", function (o, n) { o.resultType = n.getObjectValue(ThreatAssessmentResultType); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ThreatAssessmentResult.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("message", this.message);
        writer.writeObjectValue("resultType", this.resultType);
    };
    ;
    ;
    ;
    ;
    return ThreatAssessmentResult;
}(entity_1.Entity));
exports.ThreatAssessmentResult = ThreatAssessmentResult;
