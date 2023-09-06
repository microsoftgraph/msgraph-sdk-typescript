import { deserializeIntoMediaContentRatingCanada } from './deserializeIntoMediaContentRatingCanada';
import { type MediaContentRatingCanada } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaContentRatingCanadaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingCanada;
}
