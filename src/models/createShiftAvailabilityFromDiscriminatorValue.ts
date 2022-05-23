import {ShiftAvailabilityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftAvailabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftAvailabilityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftAvailabilityImpl();
}
