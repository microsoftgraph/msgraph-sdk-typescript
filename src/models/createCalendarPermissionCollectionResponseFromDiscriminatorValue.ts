import {deserializeIntoCalendarPermissionCollectionResponse} from './deserializeIntoCalendarPermissionCollectionResponse';
import {CalendarPermissionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarPermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarPermissionCollectionResponse;
}
