import {AccessReviewScopeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScopeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScopeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewScopeCollectionResponse();
}
