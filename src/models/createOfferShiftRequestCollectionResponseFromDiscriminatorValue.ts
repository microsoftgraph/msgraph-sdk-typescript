import {OfferShiftRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfferShiftRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OfferShiftRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OfferShiftRequestCollectionResponseImpl();
}
