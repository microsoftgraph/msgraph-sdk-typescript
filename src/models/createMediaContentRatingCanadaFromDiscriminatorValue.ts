import {deserializeIntoMediaContentRatingCanada} from './deserializeIntoMediaContentRatingCanada';
import {MediaContentRatingCanada} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingCanadaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingCanada;
}
