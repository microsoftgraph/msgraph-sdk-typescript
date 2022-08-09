import {MediaContentRatingAustralia} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingAustraliaFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingAustralia {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingAustralia();
}
