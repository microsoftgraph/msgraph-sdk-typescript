import {CalendarGroupCollectionResponse} from './calendarGroupCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarGroupCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarGroupCollectionResponse();
}
