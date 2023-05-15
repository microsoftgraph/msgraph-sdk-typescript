import {CalendarSharingMessage} from './calendarSharingMessage';
import {CalendarSharingMessageAction} from './calendarSharingMessageAction';
import {createCalendarSharingMessageActionFromDiscriminatorValue} from './createCalendarSharingMessageActionFromDiscriminatorValue';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {serializeCalendarSharingMessageAction} from './serializeCalendarSharingMessageAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarSharingMessage(calendarSharingMessage: CalendarSharingMessage | undefined = {} as CalendarSharingMessage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMessage(calendarSharingMessage),
        "canAccept": n => { calendarSharingMessage.canAccept = n.getBooleanValue(); },
        "sharingMessageAction": n => { calendarSharingMessage.sharingMessageAction = n.getObjectValue<CalendarSharingMessageAction>(createCalendarSharingMessageActionFromDiscriminatorValue); },
        "sharingMessageActions": n => { calendarSharingMessage.sharingMessageActions = n.getCollectionOfObjectValues<CalendarSharingMessageAction>(createCalendarSharingMessageActionFromDiscriminatorValue); },
        "suggestedCalendarName": n => { calendarSharingMessage.suggestedCalendarName = n.getStringValue(); },
    }
}
