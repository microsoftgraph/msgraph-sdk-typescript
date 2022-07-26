import {AccessReviewInactiveUsersQueryScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInactiveUsersQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInactiveUsersQueryScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInactiveUsersQueryScope();
}
