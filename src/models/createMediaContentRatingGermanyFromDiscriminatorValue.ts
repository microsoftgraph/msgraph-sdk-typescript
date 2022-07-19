import {MediaContentRatingGermany} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingGermanyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingGermany {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingGermany();
}
