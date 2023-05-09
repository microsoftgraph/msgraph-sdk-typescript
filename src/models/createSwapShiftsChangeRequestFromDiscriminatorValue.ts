import {deserializeIntoSwapShiftsChangeRequest} from './deserializeIntoSwapShiftsChangeRequest';
import {SwapShiftsChangeRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSwapShiftsChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSwapShiftsChangeRequest;
}
