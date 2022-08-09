import {EdiscoveryReviewSetQueryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryReviewSetQueryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryReviewSetQueryCollectionResponse();
}
