import {deserializeIntoShiftAvailability} from './deserializeIntoShiftAvailability';
import {ShiftAvailability} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftAvailabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShiftAvailability;
}
