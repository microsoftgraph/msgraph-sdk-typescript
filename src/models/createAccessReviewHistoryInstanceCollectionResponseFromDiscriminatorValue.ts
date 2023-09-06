import { deserializeIntoAccessReviewHistoryInstanceCollectionResponse } from './deserializeIntoAccessReviewHistoryInstanceCollectionResponse';
import { type AccessReviewHistoryInstanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewHistoryInstanceCollectionResponse;
}
