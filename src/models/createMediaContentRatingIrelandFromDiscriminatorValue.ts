import {MediaContentRatingIrelandImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingIrelandFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingIrelandImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingIrelandImpl();
}
