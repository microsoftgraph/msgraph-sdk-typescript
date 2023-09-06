import { type CalendarSharingMessage } from './calendarSharingMessage';
import { type CalendarSharingMessageAction } from './calendarSharingMessageAction';
import { serializeCalendarSharingMessageAction } from './serializeCalendarSharingMessageAction';
import { serializeMessage } from './serializeMessage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalendarSharingMessage(writer: SerializationWriter, calendarSharingMessage: CalendarSharingMessage | undefined = {} as CalendarSharingMessage) : void {
        serializeMessage(writer, calendarSharingMessage)
        writer.writeBooleanValue("canAccept", calendarSharingMessage.canAccept);
        writer.writeObjectValue<CalendarSharingMessageAction>("sharingMessageAction", calendarSharingMessage.sharingMessageAction, serializeCalendarSharingMessageAction);
        writer.writeCollectionOfObjectValues<CalendarSharingMessageAction>("sharingMessageActions", calendarSharingMessage.sharingMessageActions, serializeCalendarSharingMessageAction);
        writer.writeStringValue("suggestedCalendarName", calendarSharingMessage.suggestedCalendarName);
}
