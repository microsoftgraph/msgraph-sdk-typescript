import {deserializeIntoCalendarSharingMessageAction} from './deserializeIntoCalendarSharingMessageAction';
import {CalendarSharingMessageAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarSharingMessageAction;
}
