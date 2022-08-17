import {MediaContentRatingUnitedStates} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingUnitedStatesFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingUnitedStates {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingUnitedStates();
}
