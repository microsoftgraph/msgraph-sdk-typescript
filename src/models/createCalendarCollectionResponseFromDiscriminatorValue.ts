import {deserializeIntoCalendarCollectionResponse} from './deserializeIntoCalendarCollectionResponse';
import {CalendarCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarCollectionResponse;
}
