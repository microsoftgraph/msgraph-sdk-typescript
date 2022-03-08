import {AttendeeAvailability} from './attendeeAvailability';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeAvailabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendeeAvailability {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendeeAvailability();
}
