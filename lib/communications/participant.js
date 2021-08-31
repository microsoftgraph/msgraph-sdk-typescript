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
exports.Participant = void 0;
var entity_1 = require("../entity");
var participantInfo_1 = require("./participantInfo");
var Participant = /** @class */ (function (_super) {
    __extends(Participant, _super);
    /**
     * Instantiates a new participant and sets the default values.
     */
    function Participant() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Participant.prototype, "info", {
        /**
         * Gets the info property value.
         * @returns a participantInfo
         */
        get: function () {
            return this._info;
        },
        /**
         * Sets the info property value.
         * @param value Value to set for the info property.
         */
        set: function (value) {
            this._info = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Participant.prototype, "isInLobby", {
        /**
         * Gets the isInLobby property value. true if the participant is in lobby.
         * @returns a boolean
         */
        get: function () {
            return this._isInLobby;
        },
        /**
         * Sets the isInLobby property value. true if the participant is in lobby.
         * @param value Value to set for the isInLobby property.
         */
        set: function (value) {
            this._isInLobby = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Participant.prototype, "isMuted", {
        /**
         * Gets the isMuted property value. true if the participant is muted (client or server muted).
         * @returns a boolean
         */
        get: function () {
            return this._isMuted;
        },
        /**
         * Sets the isMuted property value. true if the participant is muted (client or server muted).
         * @param value Value to set for the isMuted property.
         */
        set: function (value) {
            this._isMuted = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Participant.prototype, "mediaStreams", {
        /**
         * Gets the mediaStreams property value. The list of media streams.
         * @returns a mediaStream
         */
        get: function () {
            return this._mediaStreams;
        },
        /**
         * Sets the mediaStreams property value. The list of media streams.
         * @param value Value to set for the mediaStreams property.
         */
        set: function (value) {
            this._mediaStreams = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Participant.prototype, "recordingInfo", {
        /**
         * Gets the recordingInfo property value. Information on whether the participant has recording capability.
         * @returns a recordingInfo
         */
        get: function () {
            return this._recordingInfo;
        },
        /**
         * Sets the recordingInfo property value. Information on whether the participant has recording capability.
         * @param value Value to set for the recordingInfo property.
         */
        set: function (value) {
            this._recordingInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Participant.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["info", function (o, n) { o.info = n.getObjectValue(participantInfo_1.ParticipantInfo); }],
            ["isInLobby", function (o, n) { o.isInLobby = n.getBooleanValue(); }],
            ["isMuted", function (o, n) { o.isMuted = n.getBooleanValue(); }],
            ["mediaStreams", function (o, n) { o.mediaStreams = n.getCollectionOfPrimitiveValues(); }],
            ["recordingInfo", function (o, n) { o.recordingInfo = n.getObjectValue(RecordingInfo); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Participant.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("info", this.info);
        writer.writeBooleanValue("isInLobby", this.isInLobby);
        writer.writeBooleanValue("isMuted", this.isMuted);
        writer.writeCollectionOfPrimitiveValues("mediaStreams", this.mediaStreams);
        writer.writeObjectValue("recordingInfo", this.recordingInfo);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return Participant;
}(entity_1.Entity));
exports.Participant = Participant;
