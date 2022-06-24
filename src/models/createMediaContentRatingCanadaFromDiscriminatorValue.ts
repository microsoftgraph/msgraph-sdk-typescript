import {MediaContentRatingCanadaImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingCanadaFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingCanadaImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingCanadaImpl();
}
