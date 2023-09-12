import { deserializeIntoMediaContentRatingAustralia } from './deserializeIntoMediaContentRatingAustralia';
import { type MediaContentRatingAustralia } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaContentRatingAustraliaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingAustralia;
}
