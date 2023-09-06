import { deserializeIntoTimeSlot } from './deserializeIntoTimeSlot';
import { type TimeSlot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeSlotFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeSlot;
}
