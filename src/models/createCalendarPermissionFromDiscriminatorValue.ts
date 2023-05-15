import {deserializeIntoCalendarPermission} from './deserializeIntoCalendarPermission';
import {CalendarPermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarPermission;
}
