import {deserializeIntoMediaContentRatingNewZealand} from './deserializeIntoMediaContentRatingNewZealand';
import {MediaContentRatingNewZealand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingNewZealandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaContentRatingNewZealand;
}
