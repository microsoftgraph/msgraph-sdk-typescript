import {deserializeIntoCalendarSharingMessage} from './deserializeIntoCalendarSharingMessage';
import {CalendarSharingMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarSharingMessage;
}
