import {CalendarSharingMessageActionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarSharingMessageActionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarSharingMessageActionImpl();
}
