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
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {Event} from './event';
import {EventType} from './eventType';
import {Extension} from './extension';
import {FreeBusyStatus} from './freeBusyStatus';
import {Importance} from './importance';
import {ItemBody} from './itemBody';
import {Location} from './location';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OnlineMeetingInfo} from './onlineMeetingInfo';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {PatternedRecurrence} from './patternedRecurrence';
import {Recipient} from './recipient';
import {ResponseStatus} from './responseStatus';
import {Sensitivity} from './sensitivity';
import {serializeAttachment} from './serializeAttachment';
import {serializeAttendee} from './serializeAttendee';
import {serializeCalendar} from './serializeCalendar';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEvent} from './serializeEvent';
import {serializeExtension} from './serializeExtension';
import {serializeItemBody} from './serializeItemBody';
import {serializeLocation} from './serializeLocation';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeOnlineMeetingInfo} from './serializeOnlineMeetingInfo';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {serializeRecipient} from './serializeRecipient';
import {serializeResponseStatus} from './serializeResponseStatus';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEvent(event: Event | undefined = {} as Event) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(event),
        "allowNewTimeProposals": n => { event.allowNewTimeProposals = n.getBooleanValue(); },
        "attachments": n => { event.attachments = n.getCollectionOfObjectValues<Attachment>(createAttachmentFromDiscriminatorValue); },
        "attendees": n => { event.attendees = n.getCollectionOfObjectValues<Attendee>(createAttendeeFromDiscriminatorValue); },
        "body": n => { event.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "bodyPreview": n => { event.bodyPreview = n.getStringValue(); },
        "calendar": n => { event.calendar = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
        "end": n => { event.end = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "extensions": n => { event.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "hasAttachments": n => { event.hasAttachments = n.getBooleanValue(); },
        "hideAttendees": n => { event.hideAttendees = n.getBooleanValue(); },
        "iCalUId": n => { event.iCalUId = n.getStringValue(); },
        "importance": n => { event.importance = n.getEnumValue<Importance>(Importance); },
        "instances": n => { event.instances = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
        "isAllDay": n => { event.isAllDay = n.getBooleanValue(); },
        "isCancelled": n => { event.isCancelled = n.getBooleanValue(); },
        "isDraft": n => { event.isDraft = n.getBooleanValue(); },
        "isOnlineMeeting": n => { event.isOnlineMeeting = n.getBooleanValue(); },
        "isOrganizer": n => { event.isOrganizer = n.getBooleanValue(); },
        "isReminderOn": n => { event.isReminderOn = n.getBooleanValue(); },
        "location": n => { event.location = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
        "locations": n => { event.locations = n.getCollectionOfObjectValues<Location>(createLocationFromDiscriminatorValue); },
        "multiValueExtendedProperties": n => { event.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "onlineMeeting": n => { event.onlineMeeting = n.getObjectValue<OnlineMeetingInfo>(createOnlineMeetingInfoFromDiscriminatorValue); },
        "onlineMeetingProvider": n => { event.onlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType); },
        "onlineMeetingUrl": n => { event.onlineMeetingUrl = n.getStringValue(); },
        "organizer": n => { event.organizer = n.getObjectValue<Recipient>(createRecipientFromDiscriminatorValue); },
        "originalEndTimeZone": n => { event.originalEndTimeZone = n.getStringValue(); },
        "originalStart": n => { event.originalStart = n.getDateValue(); },
        "originalStartTimeZone": n => { event.originalStartTimeZone = n.getStringValue(); },
        "recurrence": n => { event.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "reminderMinutesBeforeStart": n => { event.reminderMinutesBeforeStart = n.getNumberValue(); },
        "responseRequested": n => { event.responseRequested = n.getBooleanValue(); },
        "responseStatus": n => { event.responseStatus = n.getObjectValue<ResponseStatus>(createResponseStatusFromDiscriminatorValue); },
        "sensitivity": n => { event.sensitivity = n.getEnumValue<Sensitivity>(Sensitivity); },
        "seriesMasterId": n => { event.seriesMasterId = n.getStringValue(); },
        "showAs": n => { event.showAs = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
        "singleValueExtendedProperties": n => { event.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "start": n => { event.start = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "subject": n => { event.subject = n.getStringValue(); },
        "transactionId": n => { event.transactionId = n.getStringValue(); },
        "type": n => { event.type = n.getEnumValue<EventType>(EventType); },
        "webLink": n => { event.webLink = n.getStringValue(); },
    }
}
