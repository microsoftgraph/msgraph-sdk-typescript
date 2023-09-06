import { deserializeIntoMediaContentRatingUnitedStates } from './deserializeIntoMediaContentRatingUnitedStates';
import { type MediaContentRatingUnitedStates } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaContentRatingUnitedStatesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingUnitedStates;
}
