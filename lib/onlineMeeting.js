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
exports.OnlineMeeting = void 0;
var itemBody_1 = require("./chats/itemBody");
var entity_1 = require("./entity");
var OnlineMeeting = /** @class */ (function (_super) {
    __extends(OnlineMeeting, _super);
    /**
     * Instantiates a new onlineMeeting and sets the default values.
     */
    function OnlineMeeting() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OnlineMeeting.prototype, "allowAttendeeToEnableCamera", {
        /**
         * Gets the allowAttendeeToEnableCamera property value. Indicates whether attendees can turn on their camera.
         * @returns a boolean
         */
        get: function () {
            return this._allowAttendeeToEnableCamera;
        },
        /**
         * Sets the allowAttendeeToEnableCamera property value. Indicates whether attendees can turn on their camera.
         * @param value Value to set for the allowAttendeeToEnableCamera property.
         */
        set: function (value) {
            this._allowAttendeeToEnableCamera = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "allowAttendeeToEnableMic", {
        /**
         * Gets the allowAttendeeToEnableMic property value. Indicates whether attendees can turn on their microphone.
         * @returns a boolean
         */
        get: function () {
            return this._allowAttendeeToEnableMic;
        },
        /**
         * Sets the allowAttendeeToEnableMic property value. Indicates whether attendees can turn on their microphone.
         * @param value Value to set for the allowAttendeeToEnableMic property.
         */
        set: function (value) {
            this._allowAttendeeToEnableMic = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "allowedPresenters", {
        /**
         * Gets the allowedPresenters property value. Specifies who can be a presenter in a meeting. Possible values are everyone, organization, roleIsPresenter, organizer, and unknownFutureValue.
         * @returns a onlineMeetingPresenters
         */
        get: function () {
            return this._allowedPresenters;
        },
        /**
         * Sets the allowedPresenters property value. Specifies who can be a presenter in a meeting. Possible values are everyone, organization, roleIsPresenter, organizer, and unknownFutureValue.
         * @param value Value to set for the allowedPresenters property.
         */
        set: function (value) {
            this._allowedPresenters = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "allowMeetingChat", {
        /**
         * Gets the allowMeetingChat property value. Specifies the mode of meeting chat.
         * @returns a meetingChatMode
         */
        get: function () {
            return this._allowMeetingChat;
        },
        /**
         * Sets the allowMeetingChat property value. Specifies the mode of meeting chat.
         * @param value Value to set for the allowMeetingChat property.
         */
        set: function (value) {
            this._allowMeetingChat = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "allowTeamworkReactions", {
        /**
         * Gets the allowTeamworkReactions property value. Indicates if Teams reactions are enabled for the meeting.
         * @returns a boolean
         */
        get: function () {
            return this._allowTeamworkReactions;
        },
        /**
         * Sets the allowTeamworkReactions property value. Indicates if Teams reactions are enabled for the meeting.
         * @param value Value to set for the allowTeamworkReactions property.
         */
        set: function (value) {
            this._allowTeamworkReactions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "audioConferencing", {
        /**
         * Gets the audioConferencing property value. The phone access (dial-in) information for an online meeting. Read-only.
         * @returns a audioConferencing
         */
        get: function () {
            return this._audioConferencing;
        },
        /**
         * Sets the audioConferencing property value. The phone access (dial-in) information for an online meeting. Read-only.
         * @param value Value to set for the audioConferencing property.
         */
        set: function (value) {
            this._audioConferencing = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "chatInfo", {
        /**
         * Gets the chatInfo property value. The chat information associated with this online meeting.
         * @returns a chatInfo
         */
        get: function () {
            return this._chatInfo;
        },
        /**
         * Sets the chatInfo property value. The chat information associated with this online meeting.
         * @param value Value to set for the chatInfo property.
         */
        set: function (value) {
            this._chatInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "creationDateTime", {
        /**
         * Gets the creationDateTime property value. The meeting creation time in UTC. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._creationDateTime;
        },
        /**
         * Sets the creationDateTime property value. The meeting creation time in UTC. Read-only.
         * @param value Value to set for the creationDateTime property.
         */
        set: function (value) {
            this._creationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "endDateTime", {
        /**
         * Gets the endDateTime property value. The meeting end time in UTC.
         * @returns a Date
         */
        get: function () {
            return this._endDateTime;
        },
        /**
         * Sets the endDateTime property value. The meeting end time in UTC.
         * @param value Value to set for the endDateTime property.
         */
        set: function (value) {
            this._endDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "externalId", {
        /**
         * Gets the externalId property value. The external ID. A custom ID. Optional.
         * @returns a string
         */
        get: function () {
            return this._externalId;
        },
        /**
         * Sets the externalId property value. The external ID. A custom ID. Optional.
         * @param value Value to set for the externalId property.
         */
        set: function (value) {
            this._externalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "isEntryExitAnnounced", {
        /**
         * Gets the isEntryExitAnnounced property value. Indicates whether to announce when callers join or leave.
         * @returns a boolean
         */
        get: function () {
            return this._isEntryExitAnnounced;
        },
        /**
         * Sets the isEntryExitAnnounced property value. Indicates whether to announce when callers join or leave.
         * @param value Value to set for the isEntryExitAnnounced property.
         */
        set: function (value) {
            this._isEntryExitAnnounced = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "joinInformation", {
        /**
         * Gets the joinInformation property value. The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only
         * @returns a itemBody
         */
        get: function () {
            return this._joinInformation;
        },
        /**
         * Sets the joinInformation property value. The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only
         * @param value Value to set for the joinInformation property.
         */
        set: function (value) {
            this._joinInformation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "joinWebUrl", {
        /**
         * Gets the joinWebUrl property value. The join URL of the online meeting. Read-only.
         * @returns a string
         */
        get: function () {
            return this._joinWebUrl;
        },
        /**
         * Sets the joinWebUrl property value. The join URL of the online meeting. Read-only.
         * @param value Value to set for the joinWebUrl property.
         */
        set: function (value) {
            this._joinWebUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "lobbyBypassSettings", {
        /**
         * Gets the lobbyBypassSettings property value. Specifies which participants can bypass the meeting lobby.
         * @returns a lobbyBypassSettings
         */
        get: function () {
            return this._lobbyBypassSettings;
        },
        /**
         * Sets the lobbyBypassSettings property value. Specifies which participants can bypass the meeting lobby.
         * @param value Value to set for the lobbyBypassSettings property.
         */
        set: function (value) {
            this._lobbyBypassSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "participants", {
        /**
         * Gets the participants property value. The participants associated with the online meeting. This includes the organizer and the attendees.
         * @returns a meetingParticipants
         */
        get: function () {
            return this._participants;
        },
        /**
         * Sets the participants property value. The participants associated with the online meeting. This includes the organizer and the attendees.
         * @param value Value to set for the participants property.
         */
        set: function (value) {
            this._participants = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "startDateTime", {
        /**
         * Gets the startDateTime property value. The meeting start time in UTC.
         * @returns a Date
         */
        get: function () {
            return this._startDateTime;
        },
        /**
         * Sets the startDateTime property value. The meeting start time in UTC.
         * @param value Value to set for the startDateTime property.
         */
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "subject", {
        /**
         * Gets the subject property value. The subject of the online meeting.
         * @returns a string
         */
        get: function () {
            return this._subject;
        },
        /**
         * Sets the subject property value. The subject of the online meeting.
         * @param value Value to set for the subject property.
         */
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnlineMeeting.prototype, "videoTeleconferenceId", {
        /**
         * Gets the videoTeleconferenceId property value. The video teleconferencing ID. Read-only.
         * @returns a string
         */
        get: function () {
            return this._videoTeleconferenceId;
        },
        /**
         * Sets the videoTeleconferenceId property value. The video teleconferencing ID. Read-only.
         * @param value Value to set for the videoTeleconferenceId property.
         */
        set: function (value) {
            this._videoTeleconferenceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OnlineMeeting.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["allowAttendeeToEnableCamera", function (o, n) { o.allowAttendeeToEnableCamera = n.getBooleanValue(); }],
            ["allowAttendeeToEnableMic", function (o, n) { o.allowAttendeeToEnableMic = n.getBooleanValue(); }],
            ["allowedPresenters", function (o, n) { o.allowedPresenters = n.getObjectValue(OnlineMeetingPresenters); }],
            ["allowMeetingChat", function (o, n) { o.allowMeetingChat = n.getObjectValue(MeetingChatMode); }],
            ["allowTeamworkReactions", function (o, n) { o.allowTeamworkReactions = n.getBooleanValue(); }],
            ["audioConferencing", function (o, n) { o.audioConferencing = n.getObjectValue(AudioConferencing); }],
            ["chatInfo", function (o, n) { o.chatInfo = n.getObjectValue(ChatInfo); }],
            ["creationDateTime", function (o, n) { o.creationDateTime = n.getDateValue(); }],
            ["endDateTime", function (o, n) { o.endDateTime = n.getDateValue(); }],
            ["externalId", function (o, n) { o.externalId = n.getStringValue(); }],
            ["isEntryExitAnnounced", function (o, n) { o.isEntryExitAnnounced = n.getBooleanValue(); }],
            ["joinInformation", function (o, n) { o.joinInformation = n.getObjectValue(itemBody_1.ItemBody); }],
            ["joinWebUrl", function (o, n) { o.joinWebUrl = n.getStringValue(); }],
            ["lobbyBypassSettings", function (o, n) { o.lobbyBypassSettings = n.getObjectValue(LobbyBypassSettings); }],
            ["participants", function (o, n) { o.participants = n.getObjectValue(MeetingParticipants); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],
            ["subject", function (o, n) { o.subject = n.getStringValue(); }],
            ["videoTeleconferenceId", function (o, n) { o.videoTeleconferenceId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OnlineMeeting.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("allowAttendeeToEnableCamera", this.allowAttendeeToEnableCamera);
        writer.writeBooleanValue("allowAttendeeToEnableMic", this.allowAttendeeToEnableMic);
        writer.writeObjectValue("allowedPresenters", this.allowedPresenters);
        writer.writeObjectValue("allowMeetingChat", this.allowMeetingChat);
        writer.writeBooleanValue("allowTeamworkReactions", this.allowTeamworkReactions);
        writer.writeObjectValue("audioConferencing", this.audioConferencing);
        writer.writeObjectValue("chatInfo", this.chatInfo);
        writer.writeDateValue("creationDateTime", this.creationDateTime);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeBooleanValue("isEntryExitAnnounced", this.isEntryExitAnnounced);
        writer.writeObjectValue("joinInformation", this.joinInformation);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        writer.writeObjectValue("lobbyBypassSettings", this.lobbyBypassSettings);
        writer.writeObjectValue("participants", this.participants);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("videoTeleconferenceId", this.videoTeleconferenceId);
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
    return OnlineMeeting;
}(entity_1.Entity));
exports.OnlineMeeting = OnlineMeeting;
