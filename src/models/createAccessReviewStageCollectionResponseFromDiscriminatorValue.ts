import {AccessReviewStageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewStageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewStageCollectionResponse();
}
