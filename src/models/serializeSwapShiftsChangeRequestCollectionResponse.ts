import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSwapShiftsChangeRequest} from './serializeSwapShiftsChangeRequest';
import type {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import type {SwapShiftsChangeRequestCollectionResponse} from './swapShiftsChangeRequestCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSwapShiftsChangeRequestCollectionResponse(writer: SerializationWriter, swapShiftsChangeRequestCollectionResponse: SwapShiftsChangeRequestCollectionResponse | undefined = {} as SwapShiftsChangeRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, swapShiftsChangeRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<SwapShiftsChangeRequest>("value", swapShiftsChangeRequestCollectionResponse.value, serializeSwapShiftsChangeRequest);
}
