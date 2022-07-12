import {MediaContentRatingCanada} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaContentRatingCanadaFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaContentRatingCanada {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaContentRatingCanada();
}
