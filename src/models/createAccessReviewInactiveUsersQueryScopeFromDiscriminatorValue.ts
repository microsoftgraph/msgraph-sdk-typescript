import { deserializeIntoAccessReviewInactiveUsersQueryScope } from './deserializeIntoAccessReviewInactiveUsersQueryScope';
import { type AccessReviewInactiveUsersQueryScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewInactiveUsersQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInactiveUsersQueryScope;
}
