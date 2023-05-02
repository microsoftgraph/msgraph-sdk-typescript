import {deserializeIntoMediaContentRatingGermany} from './deserializeIntoMediaContentRatingGermany';
import {MediaContentRatingGermany} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingGermanyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingGermany;
}
