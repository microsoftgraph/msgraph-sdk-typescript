import { deserializeIntoCalendarPermissionCollectionResponse } from './deserializeIntoCalendarPermissionCollectionResponse';
import { type CalendarPermissionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCalendarPermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarPermissionCollectionResponse;
}
