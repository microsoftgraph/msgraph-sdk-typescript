import { deserializeIntoAccessReviewStageCollectionResponse } from './deserializeIntoAccessReviewStageCollectionResponse';
import { type AccessReviewStageCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewStageCollectionResponse;
}
