import { deserializeIntoShift } from './deserializeIntoShift';
import { type Shift } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createShiftFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShift;
}
