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
exports.Segment = void 0;
var endpoint_1 = require("../../endpoint");
var entity_1 = require("../../entity");
var Segment = /** @class */ (function (_super) {
    __extends(Segment, _super);
    /**
     * Instantiates a new segment and sets the default values.
     */
    function Segment() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Segment.prototype, "callee", {
        /**
         * Gets the callee property value. Endpoint that answered this segment.
         * @returns a endpoint
         */
        get: function () {
            return this._callee;
        },
        /**
         * Sets the callee property value. Endpoint that answered this segment.
         * @param value Value to set for the callee property.
         */
        set: function (value) {
            this._callee = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Segment.prototype, "caller", {
        /**
         * Gets the caller property value. Endpoint that initiated this segment.
         * @returns a endpoint
         */
        get: function () {
            return this._caller;
        },
        /**
         * Sets the caller property value. Endpoint that initiated this segment.
         * @param value Value to set for the caller property.
         */
        set: function (value) {
            this._caller = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Segment.prototype, "endDateTime", {
        /**
         * Gets the endDateTime property value. UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._endDateTime;
        },
        /**
         * Sets the endDateTime property value. UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the endDateTime property.
         */
        set: function (value) {
            this._endDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Segment.prototype, "failureInfo", {
        /**
         * Gets the failureInfo property value. Failure information associated with the segment if it failed.
         * @returns a failureInfo
         */
        get: function () {
            return this._failureInfo;
        },
        /**
         * Sets the failureInfo property value. Failure information associated with the segment if it failed.
         * @param value Value to set for the failureInfo property.
         */
        set: function (value) {
            this._failureInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Segment.prototype, "media", {
        /**
         * Gets the media property value. Media associated with this segment.
         * @returns a media
         */
        get: function () {
            return this._media;
        },
        /**
         * Sets the media property value. Media associated with this segment.
         * @param value Value to set for the media property.
         */
        set: function (value) {
            this._media = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Segment.prototype, "startDateTime", {
        /**
         * Gets the startDateTime property value. UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._startDateTime;
        },
        /**
         * Sets the startDateTime property value. UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the startDateTime property.
         */
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Segment.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["callee", function (o, n) { o.callee = n.getObjectValue(endpoint_1.Endpoint); }],
            ["caller", function (o, n) { o.caller = n.getObjectValue(endpoint_1.Endpoint); }],
            ["endDateTime", function (o, n) { o.endDateTime = n.getDateValue(); }],
            ["failureInfo", function (o, n) { o.failureInfo = n.getObjectValue(FailureInfo); }],
            ["media", function (o, n) { o.media = n.getCollectionOfPrimitiveValues(); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Segment.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("callee", this.callee);
        writer.writeObjectValue("caller", this.caller);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeObjectValue("failureInfo", this.failureInfo);
        writer.writeCollectionOfPrimitiveValues("media", this.media);
        writer.writeDateValue("startDateTime", this.startDateTime);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Segment;
}(entity_1.Entity));
exports.Segment = Segment;
