import {deserializeIntoMediaContentRatingUnitedKingdom} from './deserializeIntoMediaContentRatingUnitedKingdom';
import {MediaContentRatingUnitedKingdom} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingUnitedKingdomFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingUnitedKingdom;
}
