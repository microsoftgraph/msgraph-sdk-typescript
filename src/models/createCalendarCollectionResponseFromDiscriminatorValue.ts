import { deserializeIntoCalendarCollectionResponse } from './deserializeIntoCalendarCollectionResponse';
import { type CalendarCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCalendarCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarCollectionResponse;
}
