import { deserializeIntoAttendeeAvailability } from './deserializeIntoAttendeeAvailability';
import { type AttendeeAvailability } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttendeeAvailabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttendeeAvailability;
}
