import { deserializeIntoShiftAvailability } from './deserializeIntoShiftAvailability';
import { type ShiftAvailability } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createShiftAvailabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShiftAvailability;
}
