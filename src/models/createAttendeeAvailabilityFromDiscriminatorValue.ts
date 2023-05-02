import {deserializeIntoAttendeeAvailability} from './deserializeIntoAttendeeAvailability';
import {AttendeeAvailability} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeAvailabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttendeeAvailability;
}
