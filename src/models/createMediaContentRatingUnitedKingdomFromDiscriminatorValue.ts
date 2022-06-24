import {MediaContentRatingUnitedKingdomImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingUnitedKingdomFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingUnitedKingdomImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingUnitedKingdomImpl();
}
