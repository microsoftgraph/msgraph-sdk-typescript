import { deserializeIntoCalendarGroupCollectionResponse } from './deserializeIntoCalendarGroupCollectionResponse';
import { type CalendarGroupCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCalendarGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarGroupCollectionResponse;
}
