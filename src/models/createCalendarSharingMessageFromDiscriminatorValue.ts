import {CalendarSharingMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarSharingMessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarSharingMessage();
}
