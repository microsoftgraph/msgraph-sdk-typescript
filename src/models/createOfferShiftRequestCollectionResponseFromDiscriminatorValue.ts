import { deserializeIntoOfferShiftRequestCollectionResponse } from './deserializeIntoOfferShiftRequestCollectionResponse';
import { type OfferShiftRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOfferShiftRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOfferShiftRequestCollectionResponse;
}
