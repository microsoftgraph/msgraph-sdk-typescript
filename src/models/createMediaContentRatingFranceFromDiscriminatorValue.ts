import {deserializeIntoMediaContentRatingFrance} from './deserializeIntoMediaContentRatingFrance';
import {MediaContentRatingFrance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingFranceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingFrance;
}
