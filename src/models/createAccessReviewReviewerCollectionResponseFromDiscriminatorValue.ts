import {deserializeIntoAccessReviewReviewerCollectionResponse} from './deserializeIntoAccessReviewReviewerCollectionResponse';
import {AccessReviewReviewerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewReviewerCollectionResponse;
}
