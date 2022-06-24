import {MediaContentRatingFranceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingFranceFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingFranceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingFranceImpl();
}
