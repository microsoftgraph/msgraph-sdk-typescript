import {AttendeeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendeeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendeeImpl();
}
