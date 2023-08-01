import {createSwapShiftsChangeRequestFromDiscriminatorValue} from './createSwapShiftsChangeRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSwapShiftsChangeRequest} from './serializeSwapShiftsChangeRequest';
import type {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import type {SwapShiftsChangeRequestCollectionResponse} from './swapShiftsChangeRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSwapShiftsChangeRequestCollectionResponse(swapShiftsChangeRequestCollectionResponse: SwapShiftsChangeRequestCollectionResponse | undefined = {} as SwapShiftsChangeRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(swapShiftsChangeRequestCollectionResponse),
        "value": n => { swapShiftsChangeRequestCollectionResponse.value = n.getCollectionOfObjectValues<SwapShiftsChangeRequest>(createSwapShiftsChangeRequestFromDiscriminatorValue); },
    }
}
