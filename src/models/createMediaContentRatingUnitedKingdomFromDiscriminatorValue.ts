import {MediaContentRatingUnitedKingdom} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingUnitedKingdomFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingUnitedKingdom {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingUnitedKingdom();
}
