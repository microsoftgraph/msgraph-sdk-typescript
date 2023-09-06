import { deserializeIntoEdiscoveryReviewSetCollectionResponse } from './deserializeIntoEdiscoveryReviewSetCollectionResponse';
import { type EdiscoveryReviewSetCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewSetCollectionResponse;
}
