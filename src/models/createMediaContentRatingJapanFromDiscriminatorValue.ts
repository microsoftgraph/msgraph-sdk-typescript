import {MediaContentRatingJapan} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingJapanFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingJapan {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingJapan();
}
