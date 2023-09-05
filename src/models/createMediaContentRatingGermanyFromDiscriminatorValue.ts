import { deserializeIntoMediaContentRatingGermany } from './deserializeIntoMediaContentRatingGermany';
import { type MediaContentRatingGermany } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaContentRatingGermanyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingGermany;
}
