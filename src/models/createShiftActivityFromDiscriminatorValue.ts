import { deserializeIntoShiftActivity } from './deserializeIntoShiftActivity';
import { type ShiftActivity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createShiftActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShiftActivity;
}
