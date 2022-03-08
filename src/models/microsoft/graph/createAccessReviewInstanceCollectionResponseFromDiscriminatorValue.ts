import {AccessReviewInstanceCollectionResponse} from './accessReviewInstanceCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceCollectionResponse();
}
