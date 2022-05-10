import {CalendarImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarImpl();
}
