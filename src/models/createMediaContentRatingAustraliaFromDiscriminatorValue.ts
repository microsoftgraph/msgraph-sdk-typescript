import {deserializeIntoMediaContentRatingAustralia} from './deserializeIntoMediaContentRatingAustralia';
import {MediaContentRatingAustralia} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingAustraliaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingAustralia;
}
