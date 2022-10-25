import {CalendarSharingMessageActionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarSharingMessageActionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarSharingMessageActionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarSharingMessageActionCollectionResponse();
}
