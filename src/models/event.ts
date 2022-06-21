import {createAttachmentFromDiscriminatorValue} from './createAttachmentFromDiscriminatorValue';
import {createAttendeeFromDiscriminatorValue} from './createAttendeeFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createOnlineMeetingInfoFromDiscriminatorValue} from './createOnlineMeetingInfoFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {createResponseStatusFromDiscriminatorValue} from './createResponseStatusFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {EventType} from './eventType';
import {FreeBusyStatus} from './freeBusyStatus';
import {Importance} from './importance';
import {Attachment, Attendee, Calendar, DateTimeTimeZone, Extension, ItemBody, Location, MultiValueLegacyExtendedProperty, OnlineMeetingInfo, OutlookItem, PatternedRecurrence, Recipient, ResponseStatus, SingleValueLegacyExtendedProperty} from './index';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {Sensitivity} from './sensitivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Event extends OutlookItem implements Parsable {
    /** true if the meeting organizer allows invitees to propose a new time when responding; otherwise false. Optional. Default is true. */
    private _allowNewTimeProposals?: boolean | undefined;
    /** The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable. */
    private _attachments?: Attachment[] | undefined;
    /** The collection of attendees for the event. */
    private _attendees?: Attendee[] | undefined;
    /** The body of the message associated with the event. It can be in HTML or text format. */
    private _body?: ItemBody | undefined;
    /** The preview of the message associated with the event. It is in text format. */
    private _bodyPreview?: string | undefined;
    /** The calendar that contains the event. Navigation property. Read-only. */
    private _calendar?: Calendar | undefined;
    /** The date, time, and time zone that the event ends. By default, the end time is in UTC. */
    private _end?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the event. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** Set to true if the event has attachments. */
    private _hasAttachments?: boolean | undefined;
    /** When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false. */
    private _hideAttendees?: boolean | undefined;
    /** A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only. */
    private _iCalUId?: string | undefined;
    /** The importance property */
    private _importance?: Importance | undefined;
    /** The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable. */
    private _instances?: Event[] | undefined;
    /** The isAllDay property */
    private _isAllDay?: boolean | undefined;
    /** The isCancelled property */
    private _isCancelled?: boolean | undefined;
    /** The isDraft property */
    private _isDraft?: boolean | undefined;
    /** The isOnlineMeeting property */
    private _isOnlineMeeting?: boolean | undefined;
    /** The isOrganizer property */
    private _isOrganizer?: boolean | undefined;
    /** The isReminderOn property */
    private _isReminderOn?: boolean | undefined;
    /** The location property */
    private _location?: Location | undefined;
    /** The locations property */
    private _locations?: Location[] | undefined;
    /** The collection of multi-value extended properties defined for the event. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The onlineMeeting property */
    private _onlineMeeting?: OnlineMeetingInfo | undefined;
    /** The onlineMeetingProvider property */
    private _onlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /** The onlineMeetingUrl property */
    private _onlineMeetingUrl?: string | undefined;
    /** The organizer property */
    private _organizer?: Recipient | undefined;
    /** The originalEndTimeZone property */
    private _originalEndTimeZone?: string | undefined;
    /** The originalStart property */
    private _originalStart?: Date | undefined;
    /** The originalStartTimeZone property */
    private _originalStartTimeZone?: string | undefined;
    /** The recurrence property */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The reminderMinutesBeforeStart property */
    private _reminderMinutesBeforeStart?: number | undefined;
    /** The responseRequested property */
    private _responseRequested?: boolean | undefined;
    /** The responseStatus property */
    private _responseStatus?: ResponseStatus | undefined;
    /** The sensitivity property */
    private _sensitivity?: Sensitivity | undefined;
    /** The seriesMasterId property */
    private _seriesMasterId?: string | undefined;
    /** The showAs property */
    private _showAs?: FreeBusyStatus | undefined;
    /** The collection of single-value extended properties defined for the event. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The start property */
    private _start?: DateTimeTimeZone | undefined;
    /** The subject property */
    private _subject?: string | undefined;
    /** The transactionId property */
    private _transactionId?: string | undefined;
    /** The type property */
    private _type?: EventType | undefined;
    /** The webLink property */
    private _webLink?: string | undefined;
    /**
     * Gets the allowNewTimeProposals property value. true if the meeting organizer allows invitees to propose a new time when responding; otherwise false. Optional. Default is true.
     * @returns a boolean
     */
    public get allowNewTimeProposals() {
        return this._allowNewTimeProposals;
    };
    /**
     * Sets the allowNewTimeProposals property value. true if the meeting organizer allows invitees to propose a new time when responding; otherwise false. Optional. Default is true.
     * @param value Value to set for the allowNewTimeProposals property.
     */
    public set allowNewTimeProposals(value: boolean | undefined) {
        this._allowNewTimeProposals = value;
    };
    /**
     * Gets the attachments property value. The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
     * @returns a attachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: Attachment[] | undefined) {
        this._attachments = value;
    };
    /**
     * Gets the attendees property value. The collection of attendees for the event.
     * @returns a attendee
     */
    public get attendees() {
        return this._attendees;
    };
    /**
     * Sets the attendees property value. The collection of attendees for the event.
     * @param value Value to set for the attendees property.
     */
    public set attendees(value: Attendee[] | undefined) {
        this._attendees = value;
    };
    /**
     * Gets the body property value. The body of the message associated with the event. It can be in HTML or text format.
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The body of the message associated with the event. It can be in HTML or text format.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Gets the bodyPreview property value. The preview of the message associated with the event. It is in text format.
     * @returns a string
     */
    public get bodyPreview() {
        return this._bodyPreview;
    };
    /**
     * Sets the bodyPreview property value. The preview of the message associated with the event. It is in text format.
     * @param value Value to set for the bodyPreview property.
     */
    public set bodyPreview(value: string | undefined) {
        this._bodyPreview = value;
    };
    /**
     * Gets the calendar property value. The calendar that contains the event. Navigation property. Read-only.
     * @returns a calendar
     */
    public get calendar() {
        return this._calendar;
    };
    /**
     * Sets the calendar property value. The calendar that contains the event. Navigation property. Read-only.
     * @param value Value to set for the calendar property.
     */
    public set calendar(value: Calendar | undefined) {
        this._calendar = value;
    };
    /**
     * Instantiates a new Event and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the end property value. The date, time, and time zone that the event ends. By default, the end time is in UTC.
     * @returns a dateTimeTimeZone
     */
    public get end() {
        return this._end;
    };
    /**
     * Sets the end property value. The date, time, and time zone that the event ends. By default, the end time is in UTC.
     * @param value Value to set for the end property.
     */
    public set end(value: DateTimeTimeZone | undefined) {
        this._end = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the event. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the event. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowNewTimeProposals": n => { this.allowNewTimeProposals = n.getBooleanValue(); },
            "attachments": n => { this.attachments = n.getCollectionOfObjectValues<Attachment>(createAttachmentFromDiscriminatorValue); },
            "attendees": n => { this.attendees = n.getCollectionOfObjectValues<Attendee>(createAttendeeFromDiscriminatorValue); },
            "body": n => { this.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "bodyPreview": n => { this.bodyPreview = n.getStringValue(); },
            "calendar": n => { this.calendar = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "end": n => { this.end = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "hideAttendees": n => { this.hideAttendees = n.getBooleanValue(); },
            "iCalUId": n => { this.iCalUId = n.getStringValue(); },
            "importance": n => { this.importance = n.getEnumValue<Importance>(Importance); },
            "instances": n => { this.instances = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
            "isAllDay": n => { this.isAllDay = n.getBooleanValue(); },
            "isCancelled": n => { this.isCancelled = n.getBooleanValue(); },
            "isDraft": n => { this.isDraft = n.getBooleanValue(); },
            "isOnlineMeeting": n => { this.isOnlineMeeting = n.getBooleanValue(); },
            "isOrganizer": n => { this.isOrganizer = n.getBooleanValue(); },
            "isReminderOn": n => { this.isReminderOn = n.getBooleanValue(); },
            "location": n => { this.location = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
            "locations": n => { this.locations = n.getCollectionOfObjectValues<Location>(createLocationFromDiscriminatorValue); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "onlineMeeting": n => { this.onlineMeeting = n.getObjectValue<OnlineMeetingInfo>(createOnlineMeetingInfoFromDiscriminatorValue); },
            "onlineMeetingProvider": n => { this.onlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType); },
            "onlineMeetingUrl": n => { this.onlineMeetingUrl = n.getStringValue(); },
            "organizer": n => { this.organizer = n.getObjectValue<Recipient>(createRecipientFromDiscriminatorValue); },
            "originalEndTimeZone": n => { this.originalEndTimeZone = n.getStringValue(); },
            "originalStart": n => { this.originalStart = n.getDateValue(); },
            "originalStartTimeZone": n => { this.originalStartTimeZone = n.getStringValue(); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "reminderMinutesBeforeStart": n => { this.reminderMinutesBeforeStart = n.getNumberValue(); },
            "responseRequested": n => { this.responseRequested = n.getBooleanValue(); },
            "responseStatus": n => { this.responseStatus = n.getObjectValue<ResponseStatus>(createResponseStatusFromDiscriminatorValue); },
            "sensitivity": n => { this.sensitivity = n.getEnumValue<Sensitivity>(Sensitivity); },
            "seriesMasterId": n => { this.seriesMasterId = n.getStringValue(); },
            "showAs": n => { this.showAs = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "start": n => { this.start = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "subject": n => { this.subject = n.getStringValue(); },
            "transactionId": n => { this.transactionId = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<EventType>(EventType); },
            "webLink": n => { this.webLink = n.getStringValue(); },
        };
    };
    /**
     * Gets the hasAttachments property value. Set to true if the event has attachments.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Set to true if the event has attachments.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Gets the hideAttendees property value. When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false.
     * @returns a boolean
     */
    public get hideAttendees() {
        return this._hideAttendees;
    };
    /**
     * Sets the hideAttendees property value. When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false.
     * @param value Value to set for the hideAttendees property.
     */
    public set hideAttendees(value: boolean | undefined) {
        this._hideAttendees = value;
    };
    /**
     * Gets the iCalUId property value. A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only.
     * @returns a string
     */
    public get iCalUId() {
        return this._iCalUId;
    };
    /**
     * Sets the iCalUId property value. A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only.
     * @param value Value to set for the iCalUId property.
     */
    public set iCalUId(value: string | undefined) {
        this._iCalUId = value;
    };
    /**
     * Gets the importance property value. The importance property
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance property
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        this._importance = value;
    };
    /**
     * Gets the instances property value. The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
     * @returns a event
     */
    public get instances() {
        return this._instances;
    };
    /**
     * Sets the instances property value. The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
     * @param value Value to set for the instances property.
     */
    public set instances(value: Event[] | undefined) {
        this._instances = value;
    };
    /**
     * Gets the isAllDay property value. The isAllDay property
     * @returns a boolean
     */
    public get isAllDay() {
        return this._isAllDay;
    };
    /**
     * Sets the isAllDay property value. The isAllDay property
     * @param value Value to set for the isAllDay property.
     */
    public set isAllDay(value: boolean | undefined) {
        this._isAllDay = value;
    };
    /**
     * Gets the isCancelled property value. The isCancelled property
     * @returns a boolean
     */
    public get isCancelled() {
        return this._isCancelled;
    };
    /**
     * Sets the isCancelled property value. The isCancelled property
     * @param value Value to set for the isCancelled property.
     */
    public set isCancelled(value: boolean | undefined) {
        this._isCancelled = value;
    };
    /**
     * Gets the isDraft property value. The isDraft property
     * @returns a boolean
     */
    public get isDraft() {
        return this._isDraft;
    };
    /**
     * Sets the isDraft property value. The isDraft property
     * @param value Value to set for the isDraft property.
     */
    public set isDraft(value: boolean | undefined) {
        this._isDraft = value;
    };
    /**
     * Gets the isOnlineMeeting property value. The isOnlineMeeting property
     * @returns a boolean
     */
    public get isOnlineMeeting() {
        return this._isOnlineMeeting;
    };
    /**
     * Sets the isOnlineMeeting property value. The isOnlineMeeting property
     * @param value Value to set for the isOnlineMeeting property.
     */
    public set isOnlineMeeting(value: boolean | undefined) {
        this._isOnlineMeeting = value;
    };
    /**
     * Gets the isOrganizer property value. The isOrganizer property
     * @returns a boolean
     */
    public get isOrganizer() {
        return this._isOrganizer;
    };
    /**
     * Sets the isOrganizer property value. The isOrganizer property
     * @param value Value to set for the isOrganizer property.
     */
    public set isOrganizer(value: boolean | undefined) {
        this._isOrganizer = value;
    };
    /**
     * Gets the isReminderOn property value. The isReminderOn property
     * @returns a boolean
     */
    public get isReminderOn() {
        return this._isReminderOn;
    };
    /**
     * Sets the isReminderOn property value. The isReminderOn property
     * @param value Value to set for the isReminderOn property.
     */
    public set isReminderOn(value: boolean | undefined) {
        this._isReminderOn = value;
    };
    /**
     * Gets the location property value. The location property
     * @returns a location
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The location property
     * @param value Value to set for the location property.
     */
    public set location(value: Location | undefined) {
        this._location = value;
    };
    /**
     * Gets the locations property value. The locations property
     * @returns a location
     */
    public get locations() {
        return this._locations;
    };
    /**
     * Sets the locations property value. The locations property
     * @param value Value to set for the locations property.
     */
    public set locations(value: Location[] | undefined) {
        this._locations = value;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the event. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the event. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the onlineMeeting property value. The onlineMeeting property
     * @returns a onlineMeetingInfo
     */
    public get onlineMeeting() {
        return this._onlineMeeting;
    };
    /**
     * Sets the onlineMeeting property value. The onlineMeeting property
     * @param value Value to set for the onlineMeeting property.
     */
    public set onlineMeeting(value: OnlineMeetingInfo | undefined) {
        this._onlineMeeting = value;
    };
    /**
     * Gets the onlineMeetingProvider property value. The onlineMeetingProvider property
     * @returns a onlineMeetingProviderType
     */
    public get onlineMeetingProvider() {
        return this._onlineMeetingProvider;
    };
    /**
     * Sets the onlineMeetingProvider property value. The onlineMeetingProvider property
     * @param value Value to set for the onlineMeetingProvider property.
     */
    public set onlineMeetingProvider(value: OnlineMeetingProviderType | undefined) {
        this._onlineMeetingProvider = value;
    };
    /**
     * Gets the onlineMeetingUrl property value. The onlineMeetingUrl property
     * @returns a string
     */
    public get onlineMeetingUrl() {
        return this._onlineMeetingUrl;
    };
    /**
     * Sets the onlineMeetingUrl property value. The onlineMeetingUrl property
     * @param value Value to set for the onlineMeetingUrl property.
     */
    public set onlineMeetingUrl(value: string | undefined) {
        this._onlineMeetingUrl = value;
    };
    /**
     * Gets the organizer property value. The organizer property
     * @returns a recipient
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. The organizer property
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: Recipient | undefined) {
        this._organizer = value;
    };
    /**
     * Gets the originalEndTimeZone property value. The originalEndTimeZone property
     * @returns a string
     */
    public get originalEndTimeZone() {
        return this._originalEndTimeZone;
    };
    /**
     * Sets the originalEndTimeZone property value. The originalEndTimeZone property
     * @param value Value to set for the originalEndTimeZone property.
     */
    public set originalEndTimeZone(value: string | undefined) {
        this._originalEndTimeZone = value;
    };
    /**
     * Gets the originalStart property value. The originalStart property
     * @returns a Date
     */
    public get originalStart() {
        return this._originalStart;
    };
    /**
     * Sets the originalStart property value. The originalStart property
     * @param value Value to set for the originalStart property.
     */
    public set originalStart(value: Date | undefined) {
        this._originalStart = value;
    };
    /**
     * Gets the originalStartTimeZone property value. The originalStartTimeZone property
     * @returns a string
     */
    public get originalStartTimeZone() {
        return this._originalStartTimeZone;
    };
    /**
     * Sets the originalStartTimeZone property value. The originalStartTimeZone property
     * @param value Value to set for the originalStartTimeZone property.
     */
    public set originalStartTimeZone(value: string | undefined) {
        this._originalStartTimeZone = value;
    };
    /**
     * Gets the recurrence property value. The recurrence property
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. The recurrence property
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Gets the reminderMinutesBeforeStart property value. The reminderMinutesBeforeStart property
     * @returns a integer
     */
    public get reminderMinutesBeforeStart() {
        return this._reminderMinutesBeforeStart;
    };
    /**
     * Sets the reminderMinutesBeforeStart property value. The reminderMinutesBeforeStart property
     * @param value Value to set for the reminderMinutesBeforeStart property.
     */
    public set reminderMinutesBeforeStart(value: number | undefined) {
        this._reminderMinutesBeforeStart = value;
    };
    /**
     * Gets the responseRequested property value. The responseRequested property
     * @returns a boolean
     */
    public get responseRequested() {
        return this._responseRequested;
    };
    /**
     * Sets the responseRequested property value. The responseRequested property
     * @param value Value to set for the responseRequested property.
     */
    public set responseRequested(value: boolean | undefined) {
        this._responseRequested = value;
    };
    /**
     * Gets the responseStatus property value. The responseStatus property
     * @returns a responseStatus
     */
    public get responseStatus() {
        return this._responseStatus;
    };
    /**
     * Sets the responseStatus property value. The responseStatus property
     * @param value Value to set for the responseStatus property.
     */
    public set responseStatus(value: ResponseStatus | undefined) {
        this._responseStatus = value;
    };
    /**
     * Gets the sensitivity property value. The sensitivity property
     * @returns a sensitivity
     */
    public get sensitivity() {
        return this._sensitivity;
    };
    /**
     * Sets the sensitivity property value. The sensitivity property
     * @param value Value to set for the sensitivity property.
     */
    public set sensitivity(value: Sensitivity | undefined) {
        this._sensitivity = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowNewTimeProposals", this.allowNewTimeProposals);
        writer.writeCollectionOfObjectValues<Attachment>("attachments", this.attachments);
        writer.writeCollectionOfObjectValues<Attendee>("attendees", this.attendees);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeStringValue("bodyPreview", this.bodyPreview);
        writer.writeObjectValue<Calendar>("calendar", this.calendar);
        writer.writeObjectValue<DateTimeTimeZone>("end", this.end);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeBooleanValue("hideAttendees", this.hideAttendees);
        writer.writeStringValue("iCalUId", this.iCalUId);
        writer.writeEnumValue<Importance>("importance", this.importance);
        writer.writeCollectionOfObjectValues<Event>("instances", this.instances);
        writer.writeBooleanValue("isAllDay", this.isAllDay);
        writer.writeBooleanValue("isCancelled", this.isCancelled);
        writer.writeBooleanValue("isDraft", this.isDraft);
        writer.writeBooleanValue("isOnlineMeeting", this.isOnlineMeeting);
        writer.writeBooleanValue("isOrganizer", this.isOrganizer);
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        writer.writeObjectValue<Location>("location", this.location);
        writer.writeCollectionOfObjectValues<Location>("locations", this.locations);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeObjectValue<OnlineMeetingInfo>("onlineMeeting", this.onlineMeeting);
        writer.writeEnumValue<OnlineMeetingProviderType>("onlineMeetingProvider", this.onlineMeetingProvider);
        writer.writeStringValue("onlineMeetingUrl", this.onlineMeetingUrl);
        writer.writeObjectValue<Recipient>("organizer", this.organizer);
        writer.writeStringValue("originalEndTimeZone", this.originalEndTimeZone);
        writer.writeDateValue("originalStart", this.originalStart);
        writer.writeStringValue("originalStartTimeZone", this.originalStartTimeZone);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeNumberValue("reminderMinutesBeforeStart", this.reminderMinutesBeforeStart);
        writer.writeBooleanValue("responseRequested", this.responseRequested);
        writer.writeObjectValue<ResponseStatus>("responseStatus", this.responseStatus);
        writer.writeEnumValue<Sensitivity>("sensitivity", this.sensitivity);
        writer.writeStringValue("seriesMasterId", this.seriesMasterId);
        writer.writeEnumValue<FreeBusyStatus>("showAs", this.showAs);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeObjectValue<DateTimeTimeZone>("start", this.start);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("transactionId", this.transactionId);
        writer.writeEnumValue<EventType>("type", this.type);
        writer.writeStringValue("webLink", this.webLink);
    };
    /**
     * Gets the seriesMasterId property value. The seriesMasterId property
     * @returns a string
     */
    public get seriesMasterId() {
        return this._seriesMasterId;
    };
    /**
     * Sets the seriesMasterId property value. The seriesMasterId property
     * @param value Value to set for the seriesMasterId property.
     */
    public set seriesMasterId(value: string | undefined) {
        this._seriesMasterId = value;
    };
    /**
     * Gets the showAs property value. The showAs property
     * @returns a freeBusyStatus
     */
    public get showAs() {
        return this._showAs;
    };
    /**
     * Sets the showAs property value. The showAs property
     * @param value Value to set for the showAs property.
     */
    public set showAs(value: FreeBusyStatus | undefined) {
        this._showAs = value;
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the event. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the event. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Gets the start property value. The start property
     * @returns a dateTimeTimeZone
     */
    public get start() {
        return this._start;
    };
    /**
     * Sets the start property value. The start property
     * @param value Value to set for the start property.
     */
    public set start(value: DateTimeTimeZone | undefined) {
        this._start = value;
    };
    /**
     * Gets the subject property value. The subject property
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject property
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Gets the transactionId property value. The transactionId property
     * @returns a string
     */
    public get transactionId() {
        return this._transactionId;
    };
    /**
     * Sets the transactionId property value. The transactionId property
     * @param value Value to set for the transactionId property.
     */
    public set transactionId(value: string | undefined) {
        this._transactionId = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a eventType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: EventType | undefined) {
        this._type = value;
    };
    /**
     * Gets the webLink property value. The webLink property
     * @returns a string
     */
    public get webLink() {
        return this._webLink;
    };
    /**
     * Sets the webLink property value. The webLink property
     * @param value Value to set for the webLink property.
     */
    public set webLink(value: string | undefined) {
        this._webLink = value;
    };
}
