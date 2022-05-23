import {CalendarGroupCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarGroupCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarGroupCollectionResponseImpl();
}
