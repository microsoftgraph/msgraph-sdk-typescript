import {CalendarSharingMessageAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarSharingMessageAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarSharingMessageAction();
}
