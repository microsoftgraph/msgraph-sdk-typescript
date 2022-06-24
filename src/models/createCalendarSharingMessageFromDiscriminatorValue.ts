import {CalendarSharingMessageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarSharingMessageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarSharingMessageImpl();
}
