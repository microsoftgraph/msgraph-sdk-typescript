import { deserializeIntoMediaContentRatingNewZealand } from './deserializeIntoMediaContentRatingNewZealand';
import { type MediaContentRatingNewZealand } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaContentRatingNewZealandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingNewZealand;
}
