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

/** Casts the previous resource to user. */
export class EventImpl extends OutlookItemImpl implements Event, Parsable {
    /** true if the meeting organizer allows invitees to propose a new time when responding; otherwise false. Optional. Default is true. */
    public allowNewTimeProposals?: boolean | undefined;
    /** The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable. */
    public attachments?: Attachment[] | undefined;
    /** The collection of attendees for the event. */
    public attendees?: Attendee[] | undefined;
    /** The body of the message associated with the event. It can be in HTML or text format. */
    public body?: ItemBody | undefined;
    /** The preview of the message associated with the event. It is in text format. */
    public bodyPreview?: string | undefined;
    /** The calendar that contains the event. Navigation property. Read-only. */
    public calendar?: Calendar | undefined;
    /** The date, time, and time zone that the event ends. By default, the end time is in UTC. */
    public end?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the event. Nullable. */
    public extensions?: Extension[] | undefined;
    /** Set to true if the event has attachments. */
    public hasAttachments?: boolean | undefined;
    /** When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false. */
    public hideAttendees?: boolean | undefined;
    /** A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only. */
    public iCalUId?: string | undefined;
    /** The importance property */
    public importance?: Importance | undefined;
    /** The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable. */
    public instances?: Event[] | undefined;
    /** The isAllDay property */
    public isAllDay?: boolean | undefined;
    /** The isCancelled property */
    public isCancelled?: boolean | undefined;
    /** The isDraft property */
    public isDraft?: boolean | undefined;
    /** The isOnlineMeeting property */
    public isOnlineMeeting?: boolean | undefined;
    /** The isOrganizer property */
    public isOrganizer?: boolean | undefined;
    /** The isReminderOn property */
    public isReminderOn?: boolean | undefined;
    /** The location property */
    public location?: Location | undefined;
    /** The locations property */
    public locations?: Location[] | undefined;
    /** The collection of multi-value extended properties defined for the event. Read-only. Nullable. */
    public multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The onlineMeeting property */
    public onlineMeeting?: OnlineMeetingInfo | undefined;
    /** The onlineMeetingProvider property */
    public onlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /** The onlineMeetingUrl property */
    public onlineMeetingUrl?: string | undefined;
    /** The organizer property */
    public organizer?: Recipient | undefined;
    /** The originalEndTimeZone property */
    public originalEndTimeZone?: string | undefined;
    /** The originalStart property */
    public originalStart?: Date | undefined;
    /** The originalStartTimeZone property */
    public originalStartTimeZone?: string | undefined;
    /** The recurrence property */
    public recurrence?: PatternedRecurrence | undefined;
    /** The reminderMinutesBeforeStart property */
    public reminderMinutesBeforeStart?: number | undefined;
    /** The responseRequested property */
    public responseRequested?: boolean | undefined;
    /** The responseStatus property */
    public responseStatus?: ResponseStatus | undefined;
    /** The sensitivity property */
    public sensitivity?: Sensitivity | undefined;
    /** The seriesMasterId property */
    public seriesMasterId?: string | undefined;
    /** The showAs property */
    public showAs?: FreeBusyStatus | undefined;
    /** The collection of single-value extended properties defined for the event. Read-only. Nullable. */
    public singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The start property */
    public start?: DateTimeTimeZone | undefined;
    /** The subject property */
    public subject?: string | undefined;
    /** The transactionId property */
    public transactionId?: string | undefined;
    /** The type property */
    public type?: EventType | undefined;
    /** The webLink property */
    public webLink?: string | undefined;
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
        writer.writeBooleanValue("allowNewTimeProposals", this.allowNewTimeProposals);
        }
        if(this.attachments && this.attachments.length != 0){        const attachmentsArrValue: AttachmentImpl[] = []; this.attachments?.forEach(element => {attachmentsArrValue.push(new AttachmentImpl(element));});
        writer.writeCollectionOfObjectValues<AttachmentImpl>("attachments", attachmentsArrValue);
        }
        if(this.attendees && this.attendees.length != 0){        const attendeesArrValue: AttendeeImpl[] = []; this.attendees?.forEach(element => {attendeesArrValue.push(new AttendeeImpl(element));});
        writer.writeCollectionOfObjectValues<AttendeeImpl>("attendees", attendeesArrValue);
        }
        if(this.body){
        writer.writeObjectValue<ItemBodyImpl>("body", new ItemBodyImpl(this.body));
        }
        if(this.bodyPreview){
        writer.writeStringValue("bodyPreview", this.bodyPreview);
        }
        if(this.calendar){
        writer.writeObjectValue<CalendarImpl>("calendar", new CalendarImpl(this.calendar));
        }
        if(this.end){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("end", new DateTimeTimeZoneImpl(this.end));
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.hasAttachments){
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        }
        if(this.hideAttendees){
        writer.writeBooleanValue("hideAttendees", this.hideAttendees);
        }
        if(this.iCalUId){
        writer.writeStringValue("iCalUId", this.iCalUId);
        }
        if(this.importance){
        writer.writeEnumValue<Importance>("importance", this.importance);
        }
        if(this.instances && this.instances.length != 0){        const instancesArrValue: EventImpl[] = []; this.instances?.forEach(element => {instancesArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("instances", instancesArrValue);
        }
        if(this.isAllDay){
        writer.writeBooleanValue("isAllDay", this.isAllDay);
        }
        if(this.isCancelled){
        writer.writeBooleanValue("isCancelled", this.isCancelled);
        }
        if(this.isDraft){
        writer.writeBooleanValue("isDraft", this.isDraft);
        }
        if(this.isOnlineMeeting){
        writer.writeBooleanValue("isOnlineMeeting", this.isOnlineMeeting);
        }
        if(this.isOrganizer){
        writer.writeBooleanValue("isOrganizer", this.isOrganizer);
        }
        if(this.isReminderOn){
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        }
        if(this.location){
        writer.writeObjectValue<LocationImpl>("location", new LocationImpl(this.location));
        }
        if(this.locations && this.locations.length != 0){        const locationsArrValue: LocationImpl[] = []; this.locations?.forEach(element => {locationsArrValue.push(new LocationImpl(element));});
        writer.writeCollectionOfObjectValues<LocationImpl>("locations", locationsArrValue);
        }
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = []; this.multiValueExtendedProperties?.forEach(element => {multiValueExtendedPropertiesArrValue.push(new MultiValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.onlineMeeting){
        writer.writeObjectValue<OnlineMeetingInfoImpl>("onlineMeeting", new OnlineMeetingInfoImpl(this.onlineMeeting));
        }
        if(this.onlineMeetingProvider){
        writer.writeEnumValue<OnlineMeetingProviderType>("onlineMeetingProvider", this.onlineMeetingProvider);
        }
        if(this.onlineMeetingUrl){
        writer.writeStringValue("onlineMeetingUrl", this.onlineMeetingUrl);
        }
        if(this.organizer){
        writer.writeObjectValue<RecipientImpl>("organizer", new RecipientImpl(this.organizer));
        }
        if(this.originalEndTimeZone){
        writer.writeStringValue("originalEndTimeZone", this.originalEndTimeZone);
        }
        if(this.originalStart){
        writer.writeDateValue("originalStart", this.originalStart);
        }
        if(this.originalStartTimeZone){
        writer.writeStringValue("originalStartTimeZone", this.originalStartTimeZone);
        }
        if(this.recurrence){
        writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.reminderMinutesBeforeStart){
        writer.writeNumberValue("reminderMinutesBeforeStart", this.reminderMinutesBeforeStart);
        }
        if(this.responseRequested){
        writer.writeBooleanValue("responseRequested", this.responseRequested);
        }
        if(this.responseStatus){
        writer.writeObjectValue<ResponseStatusImpl>("responseStatus", new ResponseStatusImpl(this.responseStatus));
        }
        if(this.sensitivity){
        writer.writeEnumValue<Sensitivity>("sensitivity", this.sensitivity);
        }
        if(this.seriesMasterId){
        writer.writeStringValue("seriesMasterId", this.seriesMasterId);
        }
        if(this.showAs){
        writer.writeEnumValue<FreeBusyStatus>("showAs", this.showAs);
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = []; this.singleValueExtendedProperties?.forEach(element => {singleValueExtendedPropertiesArrValue.push(new SingleValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
        if(this.start){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("start", new DateTimeTimeZoneImpl(this.start));
        }
        if(this.subject){
        writer.writeStringValue("subject", this.subject);
        }
        if(this.transactionId){
        writer.writeStringValue("transactionId", this.transactionId);
        }
        if(this.type){
        writer.writeEnumValue<EventType>("type", this.type);
        }
        if(this.webLink){
        writer.writeStringValue("webLink", this.webLink);
        }
    };
}
