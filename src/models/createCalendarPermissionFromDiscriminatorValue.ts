import {CalendarPermissionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarPermissionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarPermissionImpl();
}
