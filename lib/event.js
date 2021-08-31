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
exports.Event = void 0;
var calendar_1 = require("./calendar");
var itemBody_1 = require("./chats/itemBody");
var dateTimeTimeZone_1 = require("./dateTimeTimeZone");
var extension_1 = require("./extension");
var attachment_1 = require("./groups/attachment");
var recipient_1 = require("./groups/recipient");
var multiValueLegacyExtendedProperty_1 = require("./multiValueLegacyExtendedProperty");
var outlookItem_1 = require("./outlookItem");
var singleValueLegacyExtendedProperty_1 = require("./singleValueLegacyExtendedProperty");
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    /**
     * Instantiates a new event and sets the default values.
     */
    function Event() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Event.prototype, "allowNewTimeProposals", {
        /**
         * Gets the allowNewTimeProposals property value. True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default is true.
         * @returns a boolean
         */
        get: function () {
            return this._allowNewTimeProposals;
        },
        /**
         * Sets the allowNewTimeProposals property value. True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default is true.
         * @param value Value to set for the allowNewTimeProposals property.
         */
        set: function (value) {
            this._allowNewTimeProposals = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "attachments", {
        /**
         * Gets the attachments property value. The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
         * @returns a attachment
         */
        get: function () {
            return this._attachments;
        },
        /**
         * Sets the attachments property value. The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
         * @param value Value to set for the attachments property.
         */
        set: function (value) {
            this._attachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "attendees", {
        /**
         * Gets the attendees property value. The collection of attendees for the event.
         * @returns a attendee
         */
        get: function () {
            return this._attendees;
        },
        /**
         * Sets the attendees property value. The collection of attendees for the event.
         * @param value Value to set for the attendees property.
         */
        set: function (value) {
            this._attendees = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "body", {
        /**
         * Gets the body property value. The body of the message associated with the event. It can be in HTML or text format.
         * @returns a itemBody
         */
        get: function () {
            return this._body;
        },
        /**
         * Sets the body property value. The body of the message associated with the event. It can be in HTML or text format.
         * @param value Value to set for the body property.
         */
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "bodyPreview", {
        /**
         * Gets the bodyPreview property value. The preview of the message associated with the event. It is in text format.
         * @returns a string
         */
        get: function () {
            return this._bodyPreview;
        },
        /**
         * Sets the bodyPreview property value. The preview of the message associated with the event. It is in text format.
         * @param value Value to set for the bodyPreview property.
         */
        set: function (value) {
            this._bodyPreview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "calendar", {
        /**
         * Gets the calendar property value. The calendar that contains the event. Navigation property. Read-only.
         * @returns a calendar
         */
        get: function () {
            return this._calendar;
        },
        /**
         * Sets the calendar property value. The calendar that contains the event. Navigation property. Read-only.
         * @param value Value to set for the calendar property.
         */
        set: function (value) {
            this._calendar = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "end", {
        /**
         * Gets the end property value. The date, time, and time zone that the event ends. By default, the end time is in UTC.
         * @returns a dateTimeTimeZone
         */
        get: function () {
            return this._end;
        },
        /**
         * Sets the end property value. The date, time, and time zone that the event ends. By default, the end time is in UTC.
         * @param value Value to set for the end property.
         */
        set: function (value) {
            this._end = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the event. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the event. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "hasAttachments", {
        /**
         * Gets the hasAttachments property value. Set to true if the event has attachments.
         * @returns a boolean
         */
        get: function () {
            return this._hasAttachments;
        },
        /**
         * Sets the hasAttachments property value. Set to true if the event has attachments.
         * @param value Value to set for the hasAttachments property.
         */
        set: function (value) {
            this._hasAttachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "hideAttendees", {
        /**
         * Gets the hideAttendees property value. When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false.
         * @returns a boolean
         */
        get: function () {
            return this._hideAttendees;
        },
        /**
         * Sets the hideAttendees property value. When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false.
         * @param value Value to set for the hideAttendees property.
         */
        set: function (value) {
            this._hideAttendees = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "iCalUId", {
        /**
         * Gets the iCalUId property value. A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only.
         * @returns a string
         */
        get: function () {
            return this._iCalUId;
        },
        /**
         * Sets the iCalUId property value. A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only.
         * @param value Value to set for the iCalUId property.
         */
        set: function (value) {
            this._iCalUId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "importance", {
        /**
         * Gets the importance property value. The importance of the event. The possible values are: low, normal, high.
         * @returns a importance
         */
        get: function () {
            return this._importance;
        },
        /**
         * Sets the importance property value. The importance of the event. The possible values are: low, normal, high.
         * @param value Value to set for the importance property.
         */
        set: function (value) {
            this._importance = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "instances", {
        /**
         * Gets the instances property value. The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
         * @returns a event
         */
        get: function () {
            return this._instances;
        },
        /**
         * Sets the instances property value. The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
         * @param value Value to set for the instances property.
         */
        set: function (value) {
            this._instances = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "isAllDay", {
        /**
         * Gets the isAllDay property value. Set to true if the event lasts all day.
         * @returns a boolean
         */
        get: function () {
            return this._isAllDay;
        },
        /**
         * Sets the isAllDay property value. Set to true if the event lasts all day.
         * @param value Value to set for the isAllDay property.
         */
        set: function (value) {
            this._isAllDay = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "isCancelled", {
        /**
         * Gets the isCancelled property value. Set to true if the event has been canceled.
         * @returns a boolean
         */
        get: function () {
            return this._isCancelled;
        },
        /**
         * Sets the isCancelled property value. Set to true if the event has been canceled.
         * @param value Value to set for the isCancelled property.
         */
        set: function (value) {
            this._isCancelled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "isDraft", {
        /**
         * Gets the isDraft property value. Set to true if the user has updated the meeting in Outlook but has not sent the updates to attendees. Set to false if all changes have been sent, or if the event is an appointment without any attendees.
         * @returns a boolean
         */
        get: function () {
            return this._isDraft;
        },
        /**
         * Sets the isDraft property value. Set to true if the user has updated the meeting in Outlook but has not sent the updates to attendees. Set to false if all changes have been sent, or if the event is an appointment without any attendees.
         * @param value Value to set for the isDraft property.
         */
        set: function (value) {
            this._isDraft = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "isOnlineMeeting", {
        /**
         * Gets the isOnlineMeeting property value. True if this event has online meeting information, false otherwise. Default is false. Optional.
         * @returns a boolean
         */
        get: function () {
            return this._isOnlineMeeting;
        },
        /**
         * Sets the isOnlineMeeting property value. True if this event has online meeting information, false otherwise. Default is false. Optional.
         * @param value Value to set for the isOnlineMeeting property.
         */
        set: function (value) {
            this._isOnlineMeeting = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "isOrganizer", {
        /**
         * Gets the isOrganizer property value. Set to true if the calendar owner (specified by the owner property of the calendar) is the organizer of the event (specified by the organizer property of the event). This also applies if a delegate organized the event on behalf of the owner.
         * @returns a boolean
         */
        get: function () {
            return this._isOrganizer;
        },
        /**
         * Sets the isOrganizer property value. Set to true if the calendar owner (specified by the owner property of the calendar) is the organizer of the event (specified by the organizer property of the event). This also applies if a delegate organized the event on behalf of the owner.
         * @param value Value to set for the isOrganizer property.
         */
        set: function (value) {
            this._isOrganizer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "isReminderOn", {
        /**
         * Gets the isReminderOn property value. Set to true if an alert is set to remind the user of the event.
         * @returns a boolean
         */
        get: function () {
            return this._isReminderOn;
        },
        /**
         * Sets the isReminderOn property value. Set to true if an alert is set to remind the user of the event.
         * @param value Value to set for the isReminderOn property.
         */
        set: function (value) {
            this._isReminderOn = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "location", {
        /**
         * Gets the location property value. The location of the event.
         * @returns a location
         */
        get: function () {
            return this._location;
        },
        /**
         * Sets the location property value. The location of the event.
         * @param value Value to set for the location property.
         */
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "locations", {
        /**
         * Gets the locations property value. The locations where the event is held or attended from. The location and locations properties always correspond with each other. If you update the location property, any prior locations in the locations collection would be removed and replaced by the new location value.
         * @returns a location
         */
        get: function () {
            return this._locations;
        },
        /**
         * Sets the locations property value. The locations where the event is held or attended from. The location and locations properties always correspond with each other. If you update the location property, any prior locations in the locations collection would be removed and replaced by the new location value.
         * @param value Value to set for the locations property.
         */
        set: function (value) {
            this._locations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "multiValueExtendedProperties", {
        /**
         * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the event. Read-only. Nullable.
         * @returns a multiValueLegacyExtendedProperty
         */
        get: function () {
            return this._multiValueExtendedProperties;
        },
        /**
         * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the event. Read-only. Nullable.
         * @param value Value to set for the multiValueExtendedProperties property.
         */
        set: function (value) {
            this._multiValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "onlineMeeting", {
        /**
         * Gets the onlineMeeting property value. Details for an attendee to join the meeting online. Read-only.
         * @returns a onlineMeetingInfo
         */
        get: function () {
            return this._onlineMeeting;
        },
        /**
         * Sets the onlineMeeting property value. Details for an attendee to join the meeting online. Read-only.
         * @param value Value to set for the onlineMeeting property.
         */
        set: function (value) {
            this._onlineMeeting = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "onlineMeetingProvider", {
        /**
         * Gets the onlineMeetingProvider property value. Represents the online meeting service provider. The possible values are teamsForBusiness, skypeForBusiness, and skypeForConsumer. Optional.
         * @returns a onlineMeetingProviderType
         */
        get: function () {
            return this._onlineMeetingProvider;
        },
        /**
         * Sets the onlineMeetingProvider property value. Represents the online meeting service provider. The possible values are teamsForBusiness, skypeForBusiness, and skypeForConsumer. Optional.
         * @param value Value to set for the onlineMeetingProvider property.
         */
        set: function (value) {
            this._onlineMeetingProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "onlineMeetingUrl", {
        /**
         * Gets the onlineMeetingUrl property value. A URL for an online meeting. The property is set only when an organizer specifies an event as an online meeting such as a Skype meeting. Read-only.
         * @returns a string
         */
        get: function () {
            return this._onlineMeetingUrl;
        },
        /**
         * Sets the onlineMeetingUrl property value. A URL for an online meeting. The property is set only when an organizer specifies an event as an online meeting such as a Skype meeting. Read-only.
         * @param value Value to set for the onlineMeetingUrl property.
         */
        set: function (value) {
            this._onlineMeetingUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "organizer", {
        /**
         * Gets the organizer property value. The organizer of the event.
         * @returns a recipient
         */
        get: function () {
            return this._organizer;
        },
        /**
         * Sets the organizer property value. The organizer of the event.
         * @param value Value to set for the organizer property.
         */
        set: function (value) {
            this._organizer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "originalEndTimeZone", {
        /**
         * Gets the originalEndTimeZone property value. The end time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a legacy custom time zone was set in desktop Outlook.
         * @returns a string
         */
        get: function () {
            return this._originalEndTimeZone;
        },
        /**
         * Sets the originalEndTimeZone property value. The end time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a legacy custom time zone was set in desktop Outlook.
         * @param value Value to set for the originalEndTimeZone property.
         */
        set: function (value) {
            this._originalEndTimeZone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "originalStart", {
        /**
         * Gets the originalStart property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._originalStart;
        },
        /**
         * Sets the originalStart property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the originalStart property.
         */
        set: function (value) {
            this._originalStart = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "originalStartTimeZone", {
        /**
         * Gets the originalStartTimeZone property value. The start time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a legacy custom time zone was set in desktop Outlook.
         * @returns a string
         */
        get: function () {
            return this._originalStartTimeZone;
        },
        /**
         * Sets the originalStartTimeZone property value. The start time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a legacy custom time zone was set in desktop Outlook.
         * @param value Value to set for the originalStartTimeZone property.
         */
        set: function (value) {
            this._originalStartTimeZone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "recurrence", {
        /**
         * Gets the recurrence property value. The recurrence pattern for the event.
         * @returns a patternedRecurrence
         */
        get: function () {
            return this._recurrence;
        },
        /**
         * Sets the recurrence property value. The recurrence pattern for the event.
         * @param value Value to set for the recurrence property.
         */
        set: function (value) {
            this._recurrence = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "reminderMinutesBeforeStart", {
        /**
         * Gets the reminderMinutesBeforeStart property value. The number of minutes before the event start time that the reminder alert occurs.
         * @returns a integer
         */
        get: function () {
            return this._reminderMinutesBeforeStart;
        },
        /**
         * Sets the reminderMinutesBeforeStart property value. The number of minutes before the event start time that the reminder alert occurs.
         * @param value Value to set for the reminderMinutesBeforeStart property.
         */
        set: function (value) {
            this._reminderMinutesBeforeStart = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "responseRequested", {
        /**
         * Gets the responseRequested property value. Default is true, which represents the organizer would like an invitee to send a response to the event.
         * @returns a boolean
         */
        get: function () {
            return this._responseRequested;
        },
        /**
         * Sets the responseRequested property value. Default is true, which represents the organizer would like an invitee to send a response to the event.
         * @param value Value to set for the responseRequested property.
         */
        set: function (value) {
            this._responseRequested = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "responseStatus", {
        /**
         * Gets the responseStatus property value. Indicates the type of response sent in response to an event message.
         * @returns a responseStatus
         */
        get: function () {
            return this._responseStatus;
        },
        /**
         * Sets the responseStatus property value. Indicates the type of response sent in response to an event message.
         * @param value Value to set for the responseStatus property.
         */
        set: function (value) {
            this._responseStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "sensitivity", {
        /**
         * Gets the sensitivity property value. The possible values are: normal, personal, private, confidential.
         * @returns a sensitivity
         */
        get: function () {
            return this._sensitivity;
        },
        /**
         * Sets the sensitivity property value. The possible values are: normal, personal, private, confidential.
         * @param value Value to set for the sensitivity property.
         */
        set: function (value) {
            this._sensitivity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "seriesMasterId", {
        /**
         * Gets the seriesMasterId property value. The ID for the recurring series master item, if this event is part of a recurring series.
         * @returns a string
         */
        get: function () {
            return this._seriesMasterId;
        },
        /**
         * Sets the seriesMasterId property value. The ID for the recurring series master item, if this event is part of a recurring series.
         * @param value Value to set for the seriesMasterId property.
         */
        set: function (value) {
            this._seriesMasterId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "showAs", {
        /**
         * Gets the showAs property value. The status to show. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
         * @returns a freeBusyStatus
         */
        get: function () {
            return this._showAs;
        },
        /**
         * Sets the showAs property value. The status to show. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
         * @param value Value to set for the showAs property.
         */
        set: function (value) {
            this._showAs = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "singleValueExtendedProperties", {
        /**
         * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the event. Read-only. Nullable.
         * @returns a singleValueLegacyExtendedProperty
         */
        get: function () {
            return this._singleValueExtendedProperties;
        },
        /**
         * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the event. Read-only. Nullable.
         * @param value Value to set for the singleValueExtendedProperties property.
         */
        set: function (value) {
            this._singleValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "start", {
        /**
         * Gets the start property value. The date, time, and time zone that the event starts. By default, the start time is in UTC.
         * @returns a dateTimeTimeZone
         */
        get: function () {
            return this._start;
        },
        /**
         * Sets the start property value. The date, time, and time zone that the event starts. By default, the start time is in UTC.
         * @param value Value to set for the start property.
         */
        set: function (value) {
            this._start = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "subject", {
        /**
         * Gets the subject property value. The text of the event's subject line.
         * @returns a string
         */
        get: function () {
            return this._subject;
        },
        /**
         * Sets the subject property value. The text of the event's subject line.
         * @param value Value to set for the subject property.
         */
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "transactionId", {
        /**
         * Gets the transactionId property value. A custom identifier specified by a client app for the server to avoid redundant POST operations in case of client retries to create the same event. This is useful when low network connectivity causes the client to time out before receiving a response from the server for the client's prior create-event request. After you set transactionId when creating an event, you cannot change transactionId in a subsequent update. This property is only returned in a response payload if an app has set it. Optional.
         * @returns a string
         */
        get: function () {
            return this._transactionId;
        },
        /**
         * Sets the transactionId property value. A custom identifier specified by a client app for the server to avoid redundant POST operations in case of client retries to create the same event. This is useful when low network connectivity causes the client to time out before receiving a response from the server for the client's prior create-event request. After you set transactionId when creating an event, you cannot change transactionId in a subsequent update. This property is only returned in a response payload if an app has set it. Optional.
         * @param value Value to set for the transactionId property.
         */
        set: function (value) {
            this._transactionId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "type", {
        /**
         * Gets the type property value. The event type. The possible values are: singleInstance, occurrence, exception, seriesMaster. Read-only.
         * @returns a eventType
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. The event type. The possible values are: singleInstance, occurrence, exception, seriesMaster. Read-only.
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Event.prototype, "webLink", {
        /**
         * Gets the webLink property value. The URL to open the event in Outlook on the web.Outlook on the web opens the event in the browser if you are signed in to your mailbox. Otherwise, Outlook on the web prompts you to sign in.This URL cannot be accessed from within an iFrame.
         * @returns a string
         */
        get: function () {
            return this._webLink;
        },
        /**
         * Sets the webLink property value. The URL to open the event in Outlook on the web.Outlook on the web opens the event in the browser if you are signed in to your mailbox. Otherwise, Outlook on the web prompts you to sign in.This URL cannot be accessed from within an iFrame.
         * @param value Value to set for the webLink property.
         */
        set: function (value) {
            this._webLink = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Event.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["allowNewTimeProposals", function (o, n) { o.allowNewTimeProposals = n.getBooleanValue(); }],
            ["attachments", function (o, n) { o.attachments = n.getCollectionOfObjectValues(attachment_1.Attachment); }],
            ["attendees", function (o, n) { o.attendees = n.getCollectionOfPrimitiveValues(); }],
            ["body", function (o, n) { o.body = n.getObjectValue(itemBody_1.ItemBody); }],
            ["bodyPreview", function (o, n) { o.bodyPreview = n.getStringValue(); }],
            ["calendar", function (o, n) { o.calendar = n.getObjectValue(calendar_1.Calendar); }],
            ["end", function (o, n) { o.end = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["hasAttachments", function (o, n) { o.hasAttachments = n.getBooleanValue(); }],
            ["hideAttendees", function (o, n) { o.hideAttendees = n.getBooleanValue(); }],
            ["iCalUId", function (o, n) { o.iCalUId = n.getStringValue(); }],
            ["importance", function (o, n) { o.importance = n.getObjectValue(Importance); }],
            ["instances", function (o, n) { o.instances = n.getCollectionOfObjectValues(Event); }],
            ["isAllDay", function (o, n) { o.isAllDay = n.getBooleanValue(); }],
            ["isCancelled", function (o, n) { o.isCancelled = n.getBooleanValue(); }],
            ["isDraft", function (o, n) { o.isDraft = n.getBooleanValue(); }],
            ["isOnlineMeeting", function (o, n) { o.isOnlineMeeting = n.getBooleanValue(); }],
            ["isOrganizer", function (o, n) { o.isOrganizer = n.getBooleanValue(); }],
            ["isReminderOn", function (o, n) { o.isReminderOn = n.getBooleanValue(); }],
            ["location", function (o, n) { o.location = n.getObjectValue(Location); }],
            ["locations", function (o, n) { o.locations = n.getCollectionOfPrimitiveValues(); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["onlineMeeting", function (o, n) { o.onlineMeeting = n.getObjectValue(OnlineMeetingInfo); }],
            ["onlineMeetingProvider", function (o, n) { o.onlineMeetingProvider = n.getObjectValue(OnlineMeetingProviderType); }],
            ["onlineMeetingUrl", function (o, n) { o.onlineMeetingUrl = n.getStringValue(); }],
            ["organizer", function (o, n) { o.organizer = n.getObjectValue(recipient_1.Recipient); }],
            ["originalEndTimeZone", function (o, n) { o.originalEndTimeZone = n.getStringValue(); }],
            ["originalStart", function (o, n) { o.originalStart = n.getDateValue(); }],
            ["originalStartTimeZone", function (o, n) { o.originalStartTimeZone = n.getStringValue(); }],
            ["recurrence", function (o, n) { o.recurrence = n.getObjectValue(PatternedRecurrence); }],
            ["reminderMinutesBeforeStart", function (o, n) { o.reminderMinutesBeforeStart = n.getNumberValue(); }],
            ["responseRequested", function (o, n) { o.responseRequested = n.getBooleanValue(); }],
            ["responseStatus", function (o, n) { o.responseStatus = n.getObjectValue(ResponseStatus); }],
            ["sensitivity", function (o, n) { o.sensitivity = n.getObjectValue(Sensitivity); }],
            ["seriesMasterId", function (o, n) { o.seriesMasterId = n.getStringValue(); }],
            ["showAs", function (o, n) { o.showAs = n.getObjectValue(FreeBusyStatus); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["start", function (o, n) { o.start = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["subject", function (o, n) { o.subject = n.getStringValue(); }],
            ["transactionId", function (o, n) { o.transactionId = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getObjectValue(EventType); }],
            ["webLink", function (o, n) { o.webLink = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Event.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("allowNewTimeProposals", this.allowNewTimeProposals);
        writer.writeCollectionOfObjectValues("attachments", this.attachments);
        writer.writeCollectionOfPrimitiveValues("attendees", this.attendees);
        writer.writeObjectValue("body", this.body);
        writer.writeStringValue("bodyPreview", this.bodyPreview);
        writer.writeObjectValue("calendar", this.calendar);
        writer.writeObjectValue("end", this.end);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeBooleanValue("hideAttendees", this.hideAttendees);
        writer.writeStringValue("iCalUId", this.iCalUId);
        writer.writeObjectValue("importance", this.importance);
        writer.writeCollectionOfObjectValues("instances", this.instances);
        writer.writeBooleanValue("isAllDay", this.isAllDay);
        writer.writeBooleanValue("isCancelled", this.isCancelled);
        writer.writeBooleanValue("isDraft", this.isDraft);
        writer.writeBooleanValue("isOnlineMeeting", this.isOnlineMeeting);
        writer.writeBooleanValue("isOrganizer", this.isOrganizer);
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        writer.writeObjectValue("location", this.location);
        writer.writeCollectionOfPrimitiveValues("locations", this.locations);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeObjectValue("onlineMeeting", this.onlineMeeting);
        writer.writeObjectValue("onlineMeetingProvider", this.onlineMeetingProvider);
        writer.writeStringValue("onlineMeetingUrl", this.onlineMeetingUrl);
        writer.writeObjectValue("organizer", this.organizer);
        writer.writeStringValue("originalEndTimeZone", this.originalEndTimeZone);
        writer.writeDateValue("originalStart", this.originalStart);
        writer.writeStringValue("originalStartTimeZone", this.originalStartTimeZone);
        writer.writeObjectValue("recurrence", this.recurrence);
        writer.writeNumberValue("reminderMinutesBeforeStart", this.reminderMinutesBeforeStart);
        writer.writeBooleanValue("responseRequested", this.responseRequested);
        writer.writeObjectValue("responseStatus", this.responseStatus);
        writer.writeObjectValue("sensitivity", this.sensitivity);
        writer.writeStringValue("seriesMasterId", this.seriesMasterId);
        writer.writeObjectValue("showAs", this.showAs);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeObjectValue("start", this.start);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("transactionId", this.transactionId);
        writer.writeObjectValue("type", this.type);
        writer.writeStringValue("webLink", this.webLink);
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
    return Event;
}(outlookItem_1.OutlookItem));
exports.Event = Event;
