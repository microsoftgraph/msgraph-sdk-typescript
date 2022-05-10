import {CalendarPermissionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarPermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarPermissionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarPermissionCollectionResponseImpl();
}
