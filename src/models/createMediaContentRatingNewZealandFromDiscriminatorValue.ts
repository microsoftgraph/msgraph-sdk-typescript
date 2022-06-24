import {MediaContentRatingNewZealandImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingNewZealandFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingNewZealandImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingNewZealandImpl();
}
