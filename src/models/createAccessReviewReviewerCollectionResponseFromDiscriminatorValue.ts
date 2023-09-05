import { deserializeIntoAccessReviewReviewerCollectionResponse } from './deserializeIntoAccessReviewReviewerCollectionResponse';
import { type AccessReviewReviewerCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewReviewerCollectionResponse;
}
