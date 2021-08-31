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
exports.CallRecord = void 0;
var entity_1 = require("../entity");
var identitySet_1 = require("../identitySet");
var session_1 = require("./session");
var CallRecord = /** @class */ (function (_super) {
    __extends(CallRecord, _super);
    /**
     * Instantiates a new callRecord and sets the default values.
     */
    function CallRecord() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(CallRecord.prototype, "endDateTime", {
        /**
         * Gets the endDateTime property value. UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._endDateTime;
        },
        /**
         * Sets the endDateTime property value. UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the endDateTime property.
         */
        set: function (value) {
            this._endDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "joinWebUrl", {
        /**
         * Gets the joinWebUrl property value. Meeting URL associated to the call. May not be available for a peerToPeer call record type.
         * @returns a string
         */
        get: function () {
            return this._joinWebUrl;
        },
        /**
         * Sets the joinWebUrl property value. Meeting URL associated to the call. May not be available for a peerToPeer call record type.
         * @param value Value to set for the joinWebUrl property.
         */
        set: function (value) {
            this._joinWebUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "modalities", {
        /**
         * Gets the modalities property value. List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
         * @returns a modality
         */
        get: function () {
            return this._modalities;
        },
        /**
         * Sets the modalities property value. List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
         * @param value Value to set for the modalities property.
         */
        set: function (value) {
            this._modalities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "organizer", {
        /**
         * Gets the organizer property value. The organizing party's identity.
         * @returns a identitySet
         */
        get: function () {
            return this._organizer;
        },
        /**
         * Sets the organizer property value. The organizing party's identity.
         * @param value Value to set for the organizer property.
         */
        set: function (value) {
            this._organizer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "participants", {
        /**
         * Gets the participants property value. List of distinct identities involved in the call.
         * @returns a identitySet
         */
        get: function () {
            return this._participants;
        },
        /**
         * Sets the participants property value. List of distinct identities involved in the call.
         * @param value Value to set for the participants property.
         */
        set: function (value) {
            this._participants = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "sessions", {
        /**
         * Gets the sessions property value. List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.
         * @returns a session
         */
        get: function () {
            return this._sessions;
        },
        /**
         * Sets the sessions property value. List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.
         * @param value Value to set for the sessions property.
         */
        set: function (value) {
            this._sessions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "startDateTime", {
        /**
         * Gets the startDateTime property value. UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._startDateTime;
        },
        /**
         * Sets the startDateTime property value. UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the startDateTime property.
         */
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "type", {
        /**
         * Gets the type property value. Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue.
         * @returns a callType
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue.
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CallRecord.prototype, "version", {
        /**
         * Gets the version property value. Monotonically increasing version of the call record. Higher version call records with the same ID includes additional data compared to the lower version.
         * @returns a int64
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. Monotonically increasing version of the call record. Higher version call records with the same ID includes additional data compared to the lower version.
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
    CallRecord.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["endDateTime", function (o, n) { o.endDateTime = n.getDateValue(); }],
            ["joinWebUrl", function (o, n) { o.joinWebUrl = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["modalities", function (o, n) { o.modalities = n.getCollectionOfPrimitiveValues(); }],
            ["organizer", function (o, n) { o.organizer = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["participants", function (o, n) { o.participants = n.getCollectionOfObjectValues(identitySet_1.IdentitySet); }],
            ["sessions", function (o, n) { o.sessions = n.getCollectionOfObjectValues(session_1.Session); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],
            ["type", function (o, n) { o.type = n.getObjectValue(CallType); }],
            ["version", function (o, n) { o.version = n.getObjectValue(Int64); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    CallRecord.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues("modalities", this.modalities);
        writer.writeObjectValue("organizer", this.organizer);
        writer.writeCollectionOfObjectValues("participants", this.participants);
        writer.writeCollectionOfObjectValues("sessions", this.sessions);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeObjectValue("type", this.type);
        writer.writeObjectValue("version", this.version);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return CallRecord;
}(entity_1.Entity));
exports.CallRecord = CallRecord;
