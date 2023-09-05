import { type Calendar } from './calendar';
import { CalendarColor } from './calendarColor';
import { type CalendarPermission } from './calendarPermission';
import { type EmailAddress } from './emailAddress';
import { type Event } from './event';
import { type MultiValueLegacyExtendedProperty } from './multiValueLegacyExtendedProperty';
import { OnlineMeetingProviderType } from './onlineMeetingProviderType';
import { serializeCalendarPermission } from './serializeCalendarPermission';
import { serializeEmailAddress } from './serializeEmailAddress';
import { serializeEntity } from './serializeEntity';
import { serializeEvent } from './serializeEvent';
import { serializeMultiValueLegacyExtendedProperty } from './serializeMultiValueLegacyExtendedProperty';
import { serializeSingleValueLegacyExtendedProperty } from './serializeSingleValueLegacyExtendedProperty';
import { type SingleValueLegacyExtendedProperty } from './singleValueLegacyExtendedProperty';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalendar(writer: SerializationWriter, calendar: Calendar | undefined = {} as Calendar) : void {
        serializeEntity(writer, calendar)
        if(calendar.allowedOnlineMeetingProviders)
        writer.writeEnumValue<OnlineMeetingProviderType>("allowedOnlineMeetingProviders", ...calendar.allowedOnlineMeetingProviders);
        writer.writeCollectionOfObjectValues<CalendarPermission>("calendarPermissions", calendar.calendarPermissions, serializeCalendarPermission);
        writer.writeCollectionOfObjectValues<Event>("calendarView", calendar.calendarView, serializeEvent);
        writer.writeBooleanValue("canEdit", calendar.canEdit);
        writer.writeBooleanValue("canShare", calendar.canShare);
        writer.writeBooleanValue("canViewPrivateItems", calendar.canViewPrivateItems);
        writer.writeStringValue("changeKey", calendar.changeKey);
        writer.writeEnumValue<CalendarColor>("color", calendar.color);
        writer.writeEnumValue<OnlineMeetingProviderType>("defaultOnlineMeetingProvider", calendar.defaultOnlineMeetingProvider);
        writer.writeCollectionOfObjectValues<Event>("events", calendar.events, serializeEvent);
        writer.writeStringValue("hexColor", calendar.hexColor);
        writer.writeBooleanValue("isDefaultCalendar", calendar.isDefaultCalendar);
        writer.writeBooleanValue("isRemovable", calendar.isRemovable);
        writer.writeBooleanValue("isTallyingResponses", calendar.isTallyingResponses);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", calendar.multiValueExtendedProperties, serializeMultiValueLegacyExtendedProperty);
        writer.writeStringValue("name", calendar.name);
        writer.writeObjectValue<EmailAddress>("owner", calendar.owner, serializeEmailAddress);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", calendar.singleValueExtendedProperties, serializeSingleValueLegacyExtendedProperty);
}
