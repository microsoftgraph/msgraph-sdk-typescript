import {Attachment} from './attachment';
import {Attendee} from './attendee';
import {Calendar} from './calendar';
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
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Event} from './event';
import {EventType} from './eventType';
import {Extension} from './extension';
import {FreeBusyStatus} from './freeBusyStatus';
import {Importance} from './importance';
import {AttachmentImpl, AttendeeImpl, CalendarImpl, DateTimeTimeZoneImpl, ExtensionImpl, ItemBodyImpl, LocationImpl, MultiValueLegacyExtendedPropertyImpl, OnlineMeetingInfoImpl, OutlookItemImpl, PatternedRecurrenceImpl, RecipientImpl, ResponseStatusImpl, SingleValueLegacyExtendedPropertyImpl} from './index';
import {ItemBody} from './itemBody';
import {Location} from './location';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OnlineMeetingInfo} from './onlineMeetingInfo';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {PatternedRecurrence} from './patternedRecurrence';
import {Recipient} from './recipient';
import {ResponseStatus} from './responseStatus';
import {Sensitivity} from './sensitivity';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventImpl extends OutlookItemImpl implements Event, Parsable {
    /** true if the meeting organizer allows invitees to propose a new time when responding; otherwise false. Optional. Default is true. */
    allowNewTimeProposals?: boolean | undefined;
    /** The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable. */
    attachments?: Attachment[] | undefined;
    /** The collection of attendees for the event. */
    attendees?: Attendee[] | undefined;
    /** The body of the message associated with the event. It can be in HTML or text format. */
    body?: ItemBody | undefined;
    /** The preview of the message associated with the event. It is in text format. */
    bodyPreview?: string | undefined;
    /** The calendar that contains the event. Navigation property. Read-only. */
    calendar?: Calendar | undefined;
    /** The date, time, and time zone that the event ends. By default, the end time is in UTC. */
    end?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the event. Nullable. */
    extensions?: Extension[] | undefined;
    /** Set to true if the event has attachments. */
    hasAttachments?: boolean | undefined;
    /** When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false. */
    hideAttendees?: boolean | undefined;
    /** A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only. */
    iCalUId?: string | undefined;
    /** The importance property */
    importance?: Importance | undefined;
    /** The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable. */
    instances?: Event[] | undefined;
    /** The isAllDay property */
    isAllDay?: boolean | undefined;
    /** The isCancelled property */
    isCancelled?: boolean | undefined;
    /** The isDraft property */
    isDraft?: boolean | undefined;
    /** The isOnlineMeeting property */
    isOnlineMeeting?: boolean | undefined;
    /** The isOrganizer property */
    isOrganizer?: boolean | undefined;
    /** The isReminderOn property */
    isReminderOn?: boolean | undefined;
    /** The location property */
    location?: Location | undefined;
    /** The locations property */
    locations?: Location[] | undefined;
    /** The collection of multi-value extended properties defined for the event. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The onlineMeeting property */
    onlineMeeting?: OnlineMeetingInfo | undefined;
    /** The onlineMeetingProvider property */
    onlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /** The onlineMeetingUrl property */
    onlineMeetingUrl?: string | undefined;
    /** The organizer property */
    organizer?: Recipient | undefined;
    /** The originalEndTimeZone property */
    originalEndTimeZone?: string | undefined;
    /** The originalStart property */
    originalStart?: Date | undefined;
    /** The originalStartTimeZone property */
    originalStartTimeZone?: string | undefined;
    /** The recurrence property */
    recurrence?: PatternedRecurrence | undefined;
    /** The reminderMinutesBeforeStart property */
    reminderMinutesBeforeStart?: number | undefined;
    /** The responseRequested property */
    responseRequested?: boolean | undefined;
    /** The responseStatus property */
    responseStatus?: ResponseStatus | undefined;
    /** The sensitivity property */
    sensitivity?: Sensitivity | undefined;
    /** The seriesMasterId property */
    seriesMasterId?: string | undefined;
    /** The showAs property */
    showAs?: FreeBusyStatus | undefined;
    /** The collection of single-value extended properties defined for the event. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The start property */
    start?: DateTimeTimeZone | undefined;
    /** The subject property */
    subject?: string | undefined;
    /** The transactionId property */
    transactionId?: string | undefined;
    /** The type property */
    type?: EventType | undefined;
    /** The webLink property */
    webLink?: string | undefined;
    /**
     * Instantiates a new event and sets the default values.
     * @param eventParameterValue 
     */
    public constructor(eventParameterValue?: Event | undefined) {
        super();
        this.allowNewTimeProposals = eventParameterValue?.allowNewTimeProposals ;
        this.attachments = eventParameterValue?.attachments ;
        this.attendees = eventParameterValue?.attendees ;
        this.body = eventParameterValue?.body ;
        this.bodyPreview = eventParameterValue?.bodyPreview ;
        this.calendar = eventParameterValue?.calendar ;
        this.end = eventParameterValue?.end ;
        this.extensions = eventParameterValue?.extensions ;
        this.hasAttachments = eventParameterValue?.hasAttachments ;
        this.hideAttendees = eventParameterValue?.hideAttendees ;
        this.iCalUId = eventParameterValue?.iCalUId ;
        this.importance = eventParameterValue?.importance ;
        this.instances = eventParameterValue?.instances ;
        this.isAllDay = eventParameterValue?.isAllDay ;
        this.isCancelled = eventParameterValue?.isCancelled ;
        this.isDraft = eventParameterValue?.isDraft ;
        this.isOnlineMeeting = eventParameterValue?.isOnlineMeeting ;
        this.isOrganizer = eventParameterValue?.isOrganizer ;
        this.isReminderOn = eventParameterValue?.isReminderOn ;
        this.location = eventParameterValue?.location ;
        this.locations = eventParameterValue?.locations ;
        this.multiValueExtendedProperties = eventParameterValue?.multiValueExtendedProperties ;
        this.onlineMeeting = eventParameterValue?.onlineMeeting ;
        this.onlineMeetingProvider = eventParameterValue?.onlineMeetingProvider ;
        this.onlineMeetingUrl = eventParameterValue?.onlineMeetingUrl ;
        this.organizer = eventParameterValue?.organizer ;
        this.originalEndTimeZone = eventParameterValue?.originalEndTimeZone ;
        this.originalStart = eventParameterValue?.originalStart ;
        this.originalStartTimeZone = eventParameterValue?.originalStartTimeZone ;
        this.recurrence = eventParameterValue?.recurrence ;
        this.reminderMinutesBeforeStart = eventParameterValue?.reminderMinutesBeforeStart ;
        this.responseRequested = eventParameterValue?.responseRequested ;
        this.responseStatus = eventParameterValue?.responseStatus ;
        this.sensitivity = eventParameterValue?.sensitivity ;
        this.seriesMasterId = eventParameterValue?.seriesMasterId ;
        this.showAs = eventParameterValue?.showAs ;
        this.singleValueExtendedProperties = eventParameterValue?.singleValueExtendedProperties ;
        this.start = eventParameterValue?.start ;
        this.subject = eventParameterValue?.subject ;
        this.transactionId = eventParameterValue?.transactionId ;
        this.type = eventParameterValue?.type ;
        this.webLink = eventParameterValue?.webLink ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowNewTimeProposals": n => { this.allowNewTimeProposals = n.getBooleanValue(); },
            "attachments": n => { this.attachments = n.getCollectionOfObjectValues<AttachmentImpl>(createAttachmentFromDiscriminatorValue); },
            "attendees": n => { this.attendees = n.getCollectionOfObjectValues<AttendeeImpl>(createAttendeeFromDiscriminatorValue); },
            "body": n => { this.body = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "bodyPreview": n => { this.bodyPreview = n.getStringValue(); },
            "calendar": n => { this.calendar = n.getObjectValue<CalendarImpl>(createCalendarFromDiscriminatorValue); },
            "end": n => { this.end = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "hideAttendees": n => { this.hideAttendees = n.getBooleanValue(); },
            "iCalUId": n => { this.iCalUId = n.getStringValue(); },
            "importance": n => { this.importance = n.getEnumValue<Importance>(Importance); },
            "instances": n => { this.instances = n.getCollectionOfObjectValues<EventImpl>(createEventFromDiscriminatorValue); },
            "isAllDay": n => { this.isAllDay = n.getBooleanValue(); },
            "isCancelled": n => { this.isCancelled = n.getBooleanValue(); },
            "isDraft": n => { this.isDraft = n.getBooleanValue(); },
            "isOnlineMeeting": n => { this.isOnlineMeeting = n.getBooleanValue(); },
            "isOrganizer": n => { this.isOrganizer = n.getBooleanValue(); },
            "isReminderOn": n => { this.isReminderOn = n.getBooleanValue(); },
            "location": n => { this.location = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "locations": n => { this.locations = n.getCollectionOfObjectValues<LocationImpl>(createLocationFromDiscriminatorValue); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "onlineMeeting": n => { this.onlineMeeting = n.getObjectValue<OnlineMeetingInfoImpl>(createOnlineMeetingInfoFromDiscriminatorValue); },
            "onlineMeetingProvider": n => { this.onlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType); },
            "onlineMeetingUrl": n => { this.onlineMeetingUrl = n.getStringValue(); },
            "organizer": n => { this.organizer = n.getObjectValue<RecipientImpl>(createRecipientFromDiscriminatorValue); },
            "originalEndTimeZone": n => { this.originalEndTimeZone = n.getStringValue(); },
            "originalStart": n => { this.originalStart = n.getDateValue(); },
            "originalStartTimeZone": n => { this.originalStartTimeZone = n.getStringValue(); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrenceImpl>(createPatternedRecurrenceFromDiscriminatorValue); },
            "reminderMinutesBeforeStart": n => { this.reminderMinutesBeforeStart = n.getNumberValue(); },
            "responseRequested": n => { this.responseRequested = n.getBooleanValue(); },
            "responseStatus": n => { this.responseStatus = n.getObjectValue<ResponseStatusImpl>(createResponseStatusFromDiscriminatorValue); },
            "sensitivity": n => { this.sensitivity = n.getEnumValue<Sensitivity>(Sensitivity); },
            "seriesMasterId": n => { this.seriesMasterId = n.getStringValue(); },
            "showAs": n => { this.showAs = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "start": n => { this.start = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "subject": n => { this.subject = n.getStringValue(); },
            "transactionId": n => { this.transactionId = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<EventType>(EventType); },
            "webLink": n => { this.webLink = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowNewTimeProposals){
        if(this.allowNewTimeProposals)
        writer.writeBooleanValue("allowNewTimeProposals", this.allowNewTimeProposals);
        }
        if(this.attachments){
        const attachmentsArrValue: AttachmentImpl[] = []; this.attachments?.forEach(element => {attachmentsArrValue.push(new AttachmentImpl(element));});
        writer.writeCollectionOfObjectValues<AttachmentImpl>("attachments", attachmentsArrValue);
        }
        if(this.attendees){
        const attendeesArrValue: AttendeeImpl[] = []; this.attendees?.forEach(element => {attendeesArrValue.push(new AttendeeImpl(element));});
        writer.writeCollectionOfObjectValues<AttendeeImpl>("attendees", attendeesArrValue);
        }
        if(this.body){
        if(this.body)
        writer.writeObjectValue<ItemBodyImpl>("body", new ItemBodyImpl(this.body));
        }
        if(this.bodyPreview){
        if(this.bodyPreview)
        writer.writeStringValue("bodyPreview", this.bodyPreview);
        }
        if(this.calendar){
        if(this.calendar)
        writer.writeObjectValue<CalendarImpl>("calendar", new CalendarImpl(this.calendar));
        }
        if(this.end){
        if(this.end)
        writer.writeObjectValue<DateTimeTimeZoneImpl>("end", new DateTimeTimeZoneImpl(this.end));
        }
        if(this.extensions){
        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.hasAttachments){
        if(this.hasAttachments)
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        }
        if(this.hideAttendees){
        if(this.hideAttendees)
        writer.writeBooleanValue("hideAttendees", this.hideAttendees);
        }
        if(this.iCalUId){
        if(this.iCalUId)
        writer.writeStringValue("iCalUId", this.iCalUId);
        }
        if(this.importance){
        if(this.importance)
        writer.writeEnumValue<Importance>("importance", this.importance);
        }
        if(this.instances){
        const instancesArrValue: EventImpl[] = []; this.instances?.forEach(element => {instancesArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("instances", instancesArrValue);
        }
        if(this.isAllDay){
        if(this.isAllDay)
        writer.writeBooleanValue("isAllDay", this.isAllDay);
        }
        if(this.isCancelled){
        if(this.isCancelled)
        writer.writeBooleanValue("isCancelled", this.isCancelled);
        }
        if(this.isDraft){
        if(this.isDraft)
        writer.writeBooleanValue("isDraft", this.isDraft);
        }
        if(this.isOnlineMeeting){
        if(this.isOnlineMeeting)
        writer.writeBooleanValue("isOnlineMeeting", this.isOnlineMeeting);
        }
        if(this.isOrganizer){
        if(this.isOrganizer)
        writer.writeBooleanValue("isOrganizer", this.isOrganizer);
        }
        if(this.isReminderOn){
        if(this.isReminderOn)
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        }
        if(this.location){
        if(this.location)
        writer.writeObjectValue<LocationImpl>("location", new LocationImpl(this.location));
        }
        if(this.locations){
        const locationsArrValue: LocationImpl[] = []; this.locations?.forEach(element => {locationsArrValue.push(new LocationImpl(element));});
        writer.writeCollectionOfObjectValues<LocationImpl>("locations", locationsArrValue);
        }
        if(this.multiValueExtendedProperties){
        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = []; this.multiValueExtendedProperties?.forEach(element => {multiValueExtendedPropertiesArrValue.push(new MultiValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.onlineMeeting){
        if(this.onlineMeeting)
        writer.writeObjectValue<OnlineMeetingInfoImpl>("onlineMeeting", new OnlineMeetingInfoImpl(this.onlineMeeting));
        }
        if(this.onlineMeetingProvider){
        if(this.onlineMeetingProvider)
        writer.writeEnumValue<OnlineMeetingProviderType>("onlineMeetingProvider", this.onlineMeetingProvider);
        }
        if(this.onlineMeetingUrl){
        if(this.onlineMeetingUrl)
        writer.writeStringValue("onlineMeetingUrl", this.onlineMeetingUrl);
        }
        if(this.organizer){
        if(this.organizer)
        writer.writeObjectValue<RecipientImpl>("organizer", new RecipientImpl(this.organizer));
        }
        if(this.originalEndTimeZone){
        if(this.originalEndTimeZone)
        writer.writeStringValue("originalEndTimeZone", this.originalEndTimeZone);
        }
        if(this.originalStart){
        if(this.originalStart)
        writer.writeDateValue("originalStart", this.originalStart);
        }
        if(this.originalStartTimeZone){
        if(this.originalStartTimeZone)
        writer.writeStringValue("originalStartTimeZone", this.originalStartTimeZone);
        }
        if(this.recurrence){
        if(this.recurrence)
        writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.reminderMinutesBeforeStart){
        if(this.reminderMinutesBeforeStart)
        writer.writeNumberValue("reminderMinutesBeforeStart", this.reminderMinutesBeforeStart);
        }
        if(this.responseRequested){
        if(this.responseRequested)
        writer.writeBooleanValue("responseRequested", this.responseRequested);
        }
        if(this.responseStatus){
        if(this.responseStatus)
        writer.writeObjectValue<ResponseStatusImpl>("responseStatus", new ResponseStatusImpl(this.responseStatus));
        }
        if(this.sensitivity){
        if(this.sensitivity)
        writer.writeEnumValue<Sensitivity>("sensitivity", this.sensitivity);
        }
        if(this.seriesMasterId){
        if(this.seriesMasterId)
        writer.writeStringValue("seriesMasterId", this.seriesMasterId);
        }
        if(this.showAs){
        if(this.showAs)
        writer.writeEnumValue<FreeBusyStatus>("showAs", this.showAs);
        }
        if(this.singleValueExtendedProperties){
        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = []; this.singleValueExtendedProperties?.forEach(element => {singleValueExtendedPropertiesArrValue.push(new SingleValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
        if(this.start){
        if(this.start)
        writer.writeObjectValue<DateTimeTimeZoneImpl>("start", new DateTimeTimeZoneImpl(this.start));
        }
        if(this.subject){
        if(this.subject)
        writer.writeStringValue("subject", this.subject);
        }
        if(this.transactionId){
        if(this.transactionId)
        writer.writeStringValue("transactionId", this.transactionId);
        }
        if(this.type){
        if(this.type)
        writer.writeEnumValue<EventType>("type", this.type);
        }
        if(this.webLink){
        if(this.webLink)
        writer.writeStringValue("webLink", this.webLink);
        }
    };
}
