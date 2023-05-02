import {deserializeIntoAccessReviewHistoryInstance} from './deserializeIntoAccessReviewHistoryInstance';
import {AccessReviewHistoryInstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewHistoryInstance;
}
