import {MediaContentRatingGermanyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingGermanyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingGermanyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingGermanyImpl();
}
