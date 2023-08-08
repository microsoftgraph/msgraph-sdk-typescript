import type {OfferShiftRequest} from './offerShiftRequest';
import type {OfferShiftRequestCollectionResponse} from './offerShiftRequestCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOfferShiftRequest} from './serializeOfferShiftRequest';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOfferShiftRequestCollectionResponse(writer: SerializationWriter, offerShiftRequestCollectionResponse: OfferShiftRequestCollectionResponse | undefined = {} as OfferShiftRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, offerShiftRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<OfferShiftRequest>("value", offerShiftRequestCollectionResponse.value, serializeOfferShiftRequest);
}
