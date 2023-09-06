import { deserializeIntoMediaContentRatingIreland } from './deserializeIntoMediaContentRatingIreland';
import { type MediaContentRatingIreland } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaContentRatingIrelandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingIreland;
}
