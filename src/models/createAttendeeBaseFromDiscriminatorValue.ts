import {AttendeeBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendeeBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendeeBaseImpl();
}
