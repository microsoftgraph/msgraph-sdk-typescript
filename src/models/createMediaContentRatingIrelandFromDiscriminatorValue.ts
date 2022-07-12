import {MediaContentRatingIreland} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingIrelandFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingIreland {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingIreland();
}
