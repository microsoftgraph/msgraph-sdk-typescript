import {MediaContentRatingAustraliaImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingAustraliaFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingAustraliaImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingAustraliaImpl();
}
