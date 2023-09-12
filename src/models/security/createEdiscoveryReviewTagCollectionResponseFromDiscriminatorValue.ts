import { deserializeIntoEdiscoveryReviewTagCollectionResponse } from './deserializeIntoEdiscoveryReviewTagCollectionResponse';
import { type EdiscoveryReviewTagCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewTagCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewTagCollectionResponse;
}
