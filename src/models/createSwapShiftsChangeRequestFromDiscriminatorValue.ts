import { deserializeIntoSwapShiftsChangeRequest } from './deserializeIntoSwapShiftsChangeRequest';
import { type SwapShiftsChangeRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSwapShiftsChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSwapShiftsChangeRequest;
}
