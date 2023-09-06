import { deserializeIntoAccessReviewInstanceCollectionResponse } from './deserializeIntoAccessReviewInstanceCollectionResponse';
import { type AccessReviewInstanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceCollectionResponse;
}
