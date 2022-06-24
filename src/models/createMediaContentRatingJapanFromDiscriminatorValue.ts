import {MediaContentRatingJapanImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingJapanFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingJapanImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingJapanImpl();
}
