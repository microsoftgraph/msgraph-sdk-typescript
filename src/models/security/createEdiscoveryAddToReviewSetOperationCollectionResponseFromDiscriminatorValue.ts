import {EdiscoveryAddToReviewSetOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryAddToReviewSetOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryAddToReviewSetOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryAddToReviewSetOperationCollectionResponse();
}
