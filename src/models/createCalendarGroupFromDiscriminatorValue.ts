import {CalendarGroupImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarGroupImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarGroupImpl();
}
