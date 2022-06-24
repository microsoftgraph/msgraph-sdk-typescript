import {MediaContentRatingUnitedStatesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingUnitedStatesFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingUnitedStatesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingUnitedStatesImpl();
}
