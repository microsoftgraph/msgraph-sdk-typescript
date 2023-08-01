import {createOfferShiftRequestFromDiscriminatorValue} from './createOfferShiftRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {OfferShiftRequest} from './offerShiftRequest';
import type {OfferShiftRequestCollectionResponse} from './offerShiftRequestCollectionResponse';
import {serializeOfferShiftRequest} from './serializeOfferShiftRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOfferShiftRequestCollectionResponse(offerShiftRequestCollectionResponse: OfferShiftRequestCollectionResponse | undefined = {} as OfferShiftRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(offerShiftRequestCollectionResponse),
        "value": n => { offerShiftRequestCollectionResponse.value = n.getCollectionOfObjectValues<OfferShiftRequest>(createOfferShiftRequestFromDiscriminatorValue); },
    }
}
