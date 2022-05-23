import {TimeSlotImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeSlotFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeSlotImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeSlotImpl();
}
