import { deserializeIntoCalendar } from './deserializeIntoCalendar';
import { type Calendar } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendar;
}
