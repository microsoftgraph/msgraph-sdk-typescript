import {MediaContentRatingNewZealand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingNewZealandFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingNewZealand {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingNewZealand();
}
