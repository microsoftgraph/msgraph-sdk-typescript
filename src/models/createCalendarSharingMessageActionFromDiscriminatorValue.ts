import { deserializeIntoCalendarSharingMessageAction } from './deserializeIntoCalendarSharingMessageAction';
import { type CalendarSharingMessageAction } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarSharingMessageAction;
}
