import {deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse} from './deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse';
import {AccessReviewInstanceDecisionItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse;
}
