import {deserializeIntoSwapShiftsChangeRequestCollectionResponse} from './deserializeIntoSwapShiftsChangeRequestCollectionResponse';
import {SwapShiftsChangeRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSwapShiftsChangeRequestCollectionResponse;
}
