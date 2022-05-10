import {AttendeeAvailabilityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeAvailabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendeeAvailabilityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendeeAvailabilityImpl();
}
