import { deserializeIntoEdiscoveryReviewSetQueryCollectionResponse } from './deserializeIntoEdiscoveryReviewSetQueryCollectionResponse';
import { type EdiscoveryReviewSetQueryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewSetQueryCollectionResponse;
}
