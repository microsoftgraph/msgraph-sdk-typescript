import { deserializeIntoCalendarSharingMessage } from './deserializeIntoCalendarSharingMessage';
import { type CalendarSharingMessage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarSharingMessage;
}
