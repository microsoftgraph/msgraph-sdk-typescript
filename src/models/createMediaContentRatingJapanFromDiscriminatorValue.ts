import {deserializeIntoMediaContentRatingJapan} from './deserializeIntoMediaContentRatingJapan';
import {MediaContentRatingJapan} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingJapanFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingJapan;
}
