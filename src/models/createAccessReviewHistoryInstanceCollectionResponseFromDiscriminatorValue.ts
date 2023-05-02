import {deserializeIntoAccessReviewHistoryInstanceCollectionResponse} from './deserializeIntoAccessReviewHistoryInstanceCollectionResponse';
import {AccessReviewHistoryInstanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewHistoryInstanceCollectionResponse;
}
