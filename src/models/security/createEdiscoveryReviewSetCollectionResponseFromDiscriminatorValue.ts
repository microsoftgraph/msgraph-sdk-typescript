import {EdiscoveryReviewSetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryReviewSetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryReviewSetCollectionResponse();
}
