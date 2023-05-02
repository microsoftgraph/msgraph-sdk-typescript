import {deserializeIntoAccessReviewStageCollectionResponse} from './deserializeIntoAccessReviewStageCollectionResponse';
import {AccessReviewStageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewStageCollectionResponse;
}
