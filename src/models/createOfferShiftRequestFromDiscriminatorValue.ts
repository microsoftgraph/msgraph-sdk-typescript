import {OfferShiftRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfferShiftRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : OfferShiftRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OfferShiftRequestImpl();
}
