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
exports.OfferShiftRequest = void 0;
var scheduleChangeRequest_1 = require("./scheduleChangeRequest");
var OfferShiftRequest = /** @class */ (function (_super) {
    __extends(OfferShiftRequest, _super);
    /**
     * Instantiates a new offerShiftRequest and sets the default values.
     */
    function OfferShiftRequest() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OfferShiftRequest.prototype, "recipientActionDateTime", {
        /**
         * Gets the recipientActionDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._recipientActionDateTime;
        },
        /**
         * Sets the recipientActionDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the recipientActionDateTime property.
         */
        set: function (value) {
            this._recipientActionDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OfferShiftRequest.prototype, "recipientActionMessage", {
        /**
         * Gets the recipientActionMessage property value. Custom message sent by recipient of the offer shift request.
         * @returns a string
         */
        get: function () {
            return this._recipientActionMessage;
        },
        /**
         * Sets the recipientActionMessage property value. Custom message sent by recipient of the offer shift request.
         * @param value Value to set for the recipientActionMessage property.
         */
        set: function (value) {
            this._recipientActionMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OfferShiftRequest.prototype, "recipientUserId", {
        /**
         * Gets the recipientUserId property value. User id of the recipient of the offer shift request.
         * @returns a string
         */
        get: function () {
            return this._recipientUserId;
        },
        /**
         * Sets the recipientUserId property value. User id of the recipient of the offer shift request.
         * @param value Value to set for the recipientUserId property.
         */
        set: function (value) {
            this._recipientUserId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OfferShiftRequest.prototype, "senderShiftId", {
        /**
         * Gets the senderShiftId property value. User id of the sender of the offer shift request.
         * @returns a string
         */
        get: function () {
            return this._senderShiftId;
        },
        /**
         * Sets the senderShiftId property value. User id of the sender of the offer shift request.
         * @param value Value to set for the senderShiftId property.
         */
        set: function (value) {
            this._senderShiftId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OfferShiftRequest.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["recipientActionDateTime", function (o, n) { o.recipientActionDateTime = n.getDateValue(); }],
            ["recipientActionMessage", function (o, n) { o.recipientActionMessage = n.getStringValue(); }],
            ["recipientUserId", function (o, n) { o.recipientUserId = n.getStringValue(); }],
            ["senderShiftId", function (o, n) { o.senderShiftId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OfferShiftRequest.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("recipientActionDateTime", this.recipientActionDateTime);
        writer.writeStringValue("recipientActionMessage", this.recipientActionMessage);
        writer.writeStringValue("recipientUserId", this.recipientUserId);
        writer.writeStringValue("senderShiftId", this.senderShiftId);
    };
    ;
    ;
    ;
    ;
    ;
    return OfferShiftRequest;
}(scheduleChangeRequest_1.ScheduleChangeRequest));
exports.OfferShiftRequest = OfferShiftRequest;
