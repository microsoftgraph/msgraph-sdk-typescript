import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSwapShiftsChangeRequest} from './serializeSwapShiftsChangeRequest';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {SwapShiftsChangeRequestCollectionResponse} from './swapShiftsChangeRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSwapShiftsChangeRequestCollectionResponse(writer: SerializationWriter, swapShiftsChangeRequestCollectionResponse: SwapShiftsChangeRequestCollectionResponse | undefined = {} as SwapShiftsChangeRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, swapShiftsChangeRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<SwapShiftsChangeRequest>("value", swapShiftsChangeRequestCollectionResponse.value, serializeSwapShiftsChangeRequest);
}
