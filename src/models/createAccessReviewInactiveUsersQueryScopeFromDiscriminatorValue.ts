import {AccessReviewInactiveUsersQueryScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInactiveUsersQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInactiveUsersQueryScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInactiveUsersQueryScopeImpl();
}
