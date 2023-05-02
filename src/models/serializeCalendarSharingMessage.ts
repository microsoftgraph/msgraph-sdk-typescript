import {CalendarSharingMessage} from './calendarSharingMessage';
import {CalendarSharingMessageAction} from './calendarSharingMessageAction';
import {serializeCalendarSharingMessageAction} from './serializeCalendarSharingMessageAction';
import {serializeMessage} from './serializeMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarSharingMessage(writer: SerializationWriter, calendarSharingMessage: CalendarSharingMessage | undefined = {} as CalendarSharingMessage) : void {
        serializeMessage(writer, calendarSharingMessage)
        writer.writeBooleanValue("canAccept", calendarSharingMessage.canAccept);
        writer.writeObjectValue<CalendarSharingMessageAction>("sharingMessageAction", calendarSharingMessage.sharingMessageAction, serializeCalendarSharingMessageAction);
        writer.writeCollectionOfObjectValues<CalendarSharingMessageAction>("sharingMessageActions", calendarSharingMessage.sharingMessageActions, serializeCalendarSharingMessageAction);
        writer.writeStringValue("suggestedCalendarName", calendarSharingMessage.suggestedCalendarName);
}
