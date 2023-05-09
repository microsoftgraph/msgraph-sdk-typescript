import {deserializeIntoCalendar} from './deserializeIntoCalendar';
import {Calendar} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendar;
}
