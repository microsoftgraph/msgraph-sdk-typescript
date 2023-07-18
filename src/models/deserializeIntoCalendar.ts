import {Calendar} from './calendar';
import {CalendarColor} from './calendarColor';
import {CalendarPermission} from './calendarPermission';
import {createCalendarPermissionFromDiscriminatorValue} from './createCalendarPermissionFromDiscriminatorValue';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EmailAddress} from './emailAddress';
import {Event} from './event';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {serializeCalendarPermission} from './serializeCalendarPermission';
import {serializeEmailAddress} from './serializeEmailAddress';
import {serializeEvent} from './serializeEvent';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendar(calendar: Calendar | undefined = {} as Calendar) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(calendar),
        "allowedOnlineMeetingProviders": n => { calendar.allowedOnlineMeetingProviders = n.getCollectionOfEnumValues<OnlineMeetingProviderType>(OnlineMeetingProviderType); },
        "calendarPermissions": n => { calendar.calendarPermissions = n.getCollectionOfObjectValues<CalendarPermission>(createCalendarPermissionFromDiscriminatorValue); },
        "calendarView": n => { calendar.calendarView = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
        "canEdit": n => { calendar.canEdit = n.getBooleanValue(); },
        "canShare": n => { calendar.canShare = n.getBooleanValue(); },
        "canViewPrivateItems": n => { calendar.canViewPrivateItems = n.getBooleanValue(); },
        "changeKey": n => { calendar.changeKey = n.getStringValue(); },
        "color": n => { calendar.color = n.getEnumValue<CalendarColor>(CalendarColor); },
        "defaultOnlineMeetingProvider": n => { calendar.defaultOnlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType); },
        "events": n => { calendar.events = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
        "hexColor": n => { calendar.hexColor = n.getStringValue(); },
        "isDefaultCalendar": n => { calendar.isDefaultCalendar = n.getBooleanValue(); },
        "isRemovable": n => { calendar.isRemovable = n.getBooleanValue(); },
        "isTallyingResponses": n => { calendar.isTallyingResponses = n.getBooleanValue(); },
        "multiValueExtendedProperties": n => { calendar.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "name": n => { calendar.name = n.getStringValue(); },
        "owner": n => { calendar.owner = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
        "singleValueExtendedProperties": n => { calendar.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
    }
}
