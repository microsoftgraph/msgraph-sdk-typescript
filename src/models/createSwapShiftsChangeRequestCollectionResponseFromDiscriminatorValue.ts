import {SwapShiftsChangeRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SwapShiftsChangeRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SwapShiftsChangeRequestCollectionResponseImpl();
}
