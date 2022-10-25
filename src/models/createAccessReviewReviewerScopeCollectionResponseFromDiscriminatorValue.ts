import {AccessReviewReviewerScopeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerScopeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewReviewerScopeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewReviewerScopeCollectionResponse();
}
