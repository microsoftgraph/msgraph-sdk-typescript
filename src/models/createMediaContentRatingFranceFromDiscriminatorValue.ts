import { deserializeIntoMediaContentRatingFrance } from './deserializeIntoMediaContentRatingFrance';
import { type MediaContentRatingFrance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaContentRatingFranceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingFrance;
}
