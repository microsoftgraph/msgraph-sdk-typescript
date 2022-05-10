import {CalendarCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarCollectionResponseImpl();
}
