import {CalendarSharingMessageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarSharingMessageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarSharingMessageCollectionResponse();
}
