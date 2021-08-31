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
exports.Call = void 0;
var entity_1 = require("../entity");
var invitationParticipantInfo_1 = require("./calls/microsoft/graph/invitationParticipantInfo");
var commsOperation_1 = require("./commsOperation");
var mediaConfig_1 = require("./mediaConfig");
var participant_1 = require("./participant");
var participantInfo_1 = require("./participantInfo");
var Call = /** @class */ (function (_super) {
    __extends(Call, _super);
    /**
     * Instantiates a new call and sets the default values.
     */
    function Call() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Call.prototype, "callbackUri", {
        /**
         * Gets the callbackUri property value. The callback URL on which callbacks will be delivered. Must be https.
         * @returns a string
         */
        get: function () {
            return this._callbackUri;
        },
        /**
         * Sets the callbackUri property value. The callback URL on which callbacks will be delivered. Must be https.
         * @param value Value to set for the callbackUri property.
         */
        set: function (value) {
            this._callbackUri = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "callChainId", {
        /**
         * Gets the callChainId property value. A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.
         * @returns a string
         */
        get: function () {
            return this._callChainId;
        },
        /**
         * Sets the callChainId property value. A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.
         * @param value Value to set for the callChainId property.
         */
        set: function (value) {
            this._callChainId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "callOptions", {
        /**
         * Gets the callOptions property value.
         * @returns a callOptions
         */
        get: function () {
            return this._callOptions;
        },
        /**
         * Sets the callOptions property value.
         * @param value Value to set for the callOptions property.
         */
        set: function (value) {
            this._callOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "callRoutes", {
        /**
         * Gets the callRoutes property value. The routing information on how the call was retargeted. Read-only.
         * @returns a callRoute
         */
        get: function () {
            return this._callRoutes;
        },
        /**
         * Sets the callRoutes property value. The routing information on how the call was retargeted. Read-only.
         * @param value Value to set for the callRoutes property.
         */
        set: function (value) {
            this._callRoutes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "chatInfo", {
        /**
         * Gets the chatInfo property value. The chat information. Required information for meeting scenarios.
         * @returns a chatInfo
         */
        get: function () {
            return this._chatInfo;
        },
        /**
         * Sets the chatInfo property value. The chat information. Required information for meeting scenarios.
         * @param value Value to set for the chatInfo property.
         */
        set: function (value) {
            this._chatInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "direction", {
        /**
         * Gets the direction property value. The direction of the call. The possible value are incoming or outgoing. Read-only.
         * @returns a callDirection
         */
        get: function () {
            return this._direction;
        },
        /**
         * Sets the direction property value. The direction of the call. The possible value are incoming or outgoing. Read-only.
         * @param value Value to set for the direction property.
         */
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "incomingContext", {
        /**
         * Gets the incomingContext property value. The context associated with an incoming call. Read-only. Server generated.
         * @returns a incomingContext
         */
        get: function () {
            return this._incomingContext;
        },
        /**
         * Sets the incomingContext property value. The context associated with an incoming call. Read-only. Server generated.
         * @param value Value to set for the incomingContext property.
         */
        set: function (value) {
            this._incomingContext = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "mediaConfig", {
        /**
         * Gets the mediaConfig property value. The media configuration. Required information for creating peer to peer calls or joining meetings.
         * @returns a mediaConfig
         */
        get: function () {
            return this._mediaConfig;
        },
        /**
         * Sets the mediaConfig property value. The media configuration. Required information for creating peer to peer calls or joining meetings.
         * @param value Value to set for the mediaConfig property.
         */
        set: function (value) {
            this._mediaConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "mediaState", {
        /**
         * Gets the mediaState property value. Read-only. The call media state.
         * @returns a callMediaState
         */
        get: function () {
            return this._mediaState;
        },
        /**
         * Sets the mediaState property value. Read-only. The call media state.
         * @param value Value to set for the mediaState property.
         */
        set: function (value) {
            this._mediaState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "meetingInfo", {
        /**
         * Gets the meetingInfo property value. The meeting information. Required information for meeting scenarios.
         * @returns a meetingInfo
         */
        get: function () {
            return this._meetingInfo;
        },
        /**
         * Sets the meetingInfo property value. The meeting information. Required information for meeting scenarios.
         * @param value Value to set for the meetingInfo property.
         */
        set: function (value) {
            this._meetingInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "myParticipantId", {
        /**
         * Gets the myParticipantId property value.
         * @returns a string
         */
        get: function () {
            return this._myParticipantId;
        },
        /**
         * Sets the myParticipantId property value.
         * @param value Value to set for the myParticipantId property.
         */
        set: function (value) {
            this._myParticipantId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "operations", {
        /**
         * Gets the operations property value. Read-only. Nullable.
         * @returns a commsOperation
         */
        get: function () {
            return this._operations;
        },
        /**
         * Sets the operations property value. Read-only. Nullable.
         * @param value Value to set for the operations property.
         */
        set: function (value) {
            this._operations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "participants", {
        /**
         * Gets the participants property value. Read-only. Nullable.
         * @returns a participant
         */
        get: function () {
            return this._participants;
        },
        /**
         * Sets the participants property value. Read-only. Nullable.
         * @param value Value to set for the participants property.
         */
        set: function (value) {
            this._participants = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "requestedModalities", {
        /**
         * Gets the requestedModalities property value.
         * @returns a modality
         */
        get: function () {
            return this._requestedModalities;
        },
        /**
         * Sets the requestedModalities property value.
         * @param value Value to set for the requestedModalities property.
         */
        set: function (value) {
            this._requestedModalities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "resultInfo", {
        /**
         * Gets the resultInfo property value.
         * @returns a resultInfo
         */
        get: function () {
            return this._resultInfo;
        },
        /**
         * Sets the resultInfo property value.
         * @param value Value to set for the resultInfo property.
         */
        set: function (value) {
            this._resultInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "source", {
        /**
         * Gets the source property value.
         * @returns a participantInfo
         */
        get: function () {
            return this._source;
        },
        /**
         * Sets the source property value.
         * @param value Value to set for the source property.
         */
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "state", {
        /**
         * Gets the state property value.
         * @returns a callState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "subject", {
        /**
         * Gets the subject property value.
         * @returns a string
         */
        get: function () {
            return this._subject;
        },
        /**
         * Sets the subject property value.
         * @param value Value to set for the subject property.
         */
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "targets", {
        /**
         * Gets the targets property value.
         * @returns a invitationParticipantInfo
         */
        get: function () {
            return this._targets;
        },
        /**
         * Sets the targets property value.
         * @param value Value to set for the targets property.
         */
        set: function (value) {
            this._targets = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "tenantId", {
        /**
         * Gets the tenantId property value.
         * @returns a string
         */
        get: function () {
            return this._tenantId;
        },
        /**
         * Sets the tenantId property value.
         * @param value Value to set for the tenantId property.
         */
        set: function (value) {
            this._tenantId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "toneInfo", {
        /**
         * Gets the toneInfo property value.
         * @returns a toneInfo
         */
        get: function () {
            return this._toneInfo;
        },
        /**
         * Sets the toneInfo property value.
         * @param value Value to set for the toneInfo property.
         */
        set: function (value) {
            this._toneInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Call.prototype, "transcription", {
        /**
         * Gets the transcription property value. The transcription information for the call. Read-only.
         * @returns a callTranscriptionInfo
         */
        get: function () {
            return this._transcription;
        },
        /**
         * Sets the transcription property value. The transcription information for the call. Read-only.
         * @param value Value to set for the transcription property.
         */
        set: function (value) {
            this._transcription = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Call.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["callbackUri", function (o, n) { o.callbackUri = n.getStringValue(); }],
            ["callChainId", function (o, n) { o.callChainId = n.getStringValue(); }],
            ["callOptions", function (o, n) { o.callOptions = n.getObjectValue(CallOptions); }],
            ["callRoutes", function (o, n) { o.callRoutes = n.getCollectionOfPrimitiveValues(); }],
            ["chatInfo", function (o, n) { o.chatInfo = n.getObjectValue(ChatInfo); }],
            ["direction", function (o, n) { o.direction = n.getObjectValue(CallDirection); }],
            ["incomingContext", function (o, n) { o.incomingContext = n.getObjectValue(IncomingContext); }],
            ["mediaConfig", function (o, n) { o.mediaConfig = n.getObjectValue(mediaConfig_1.MediaConfig); }],
            ["mediaState", function (o, n) { o.mediaState = n.getObjectValue(CallMediaState); }],
            ["meetingInfo", function (o, n) { o.meetingInfo = n.getObjectValue(MeetingInfo); }],
            ["myParticipantId", function (o, n) { o.myParticipantId = n.getStringValue(); }],
            ["operations", function (o, n) { o.operations = n.getCollectionOfObjectValues(commsOperation_1.CommsOperation); }],
            ["participants", function (o, n) { o.participants = n.getCollectionOfObjectValues(participant_1.Participant); }],
            ["requestedModalities", function (o, n) { o.requestedModalities = n.getCollectionOfPrimitiveValues(); }],
            ["resultInfo", function (o, n) { o.resultInfo = n.getObjectValue(ResultInfo); }],
            ["source", function (o, n) { o.source = n.getObjectValue(participantInfo_1.ParticipantInfo); }],
            ["state", function (o, n) { o.state = n.getObjectValue(CallState); }],
            ["subject", function (o, n) { o.subject = n.getStringValue(); }],
            ["targets", function (o, n) { o.targets = n.getCollectionOfObjectValues(invitationParticipantInfo_1.InvitationParticipantInfo); }],
            ["tenantId", function (o, n) { o.tenantId = n.getStringValue(); }],
            ["toneInfo", function (o, n) { o.toneInfo = n.getObjectValue(ToneInfo); }],
            ["transcription", function (o, n) { o.transcription = n.getObjectValue(CallTranscriptionInfo); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Call.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("callbackUri", this.callbackUri);
        writer.writeStringValue("callChainId", this.callChainId);
        writer.writeObjectValue("callOptions", this.callOptions);
        writer.writeCollectionOfPrimitiveValues("callRoutes", this.callRoutes);
        writer.writeObjectValue("chatInfo", this.chatInfo);
        writer.writeObjectValue("direction", this.direction);
        writer.writeObjectValue("incomingContext", this.incomingContext);
        writer.writeObjectValue("mediaConfig", this.mediaConfig);
        writer.writeObjectValue("mediaState", this.mediaState);
        writer.writeObjectValue("meetingInfo", this.meetingInfo);
        writer.writeStringValue("myParticipantId", this.myParticipantId);
        writer.writeCollectionOfObjectValues("operations", this.operations);
        writer.writeCollectionOfObjectValues("participants", this.participants);
        writer.writeCollectionOfPrimitiveValues("requestedModalities", this.requestedModalities);
        writer.writeObjectValue("resultInfo", this.resultInfo);
        writer.writeObjectValue("source", this.source);
        writer.writeObjectValue("state", this.state);
        writer.writeStringValue("subject", this.subject);
        writer.writeCollectionOfObjectValues("targets", this.targets);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeObjectValue("toneInfo", this.toneInfo);
        writer.writeObjectValue("transcription", this.transcription);
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
    ;
    return Call;
}(entity_1.Entity));
exports.Call = Call;
