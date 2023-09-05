import { deserializeIntoMediaContentRatingJapan } from './deserializeIntoMediaContentRatingJapan';
import { type MediaContentRatingJapan } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaContentRatingJapanFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingJapan;
}
