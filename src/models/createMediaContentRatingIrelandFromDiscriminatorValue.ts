import {deserializeIntoMediaContentRatingIreland} from './deserializeIntoMediaContentRatingIreland';
import {MediaContentRatingIreland} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingIrelandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingIreland;
}
