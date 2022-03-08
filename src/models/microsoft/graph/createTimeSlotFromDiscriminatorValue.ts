import {TimeSlot} from './timeSlot';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeSlotFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeSlot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeSlot();
}
