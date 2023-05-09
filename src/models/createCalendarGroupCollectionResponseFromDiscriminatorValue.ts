import {deserializeIntoCalendarGroupCollectionResponse} from './deserializeIntoCalendarGroupCollectionResponse';
import {CalendarGroupCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarGroupCollectionResponse;
}
