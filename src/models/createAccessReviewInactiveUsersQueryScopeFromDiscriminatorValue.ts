import {deserializeIntoAccessReviewInactiveUsersQueryScope} from './deserializeIntoAccessReviewInactiveUsersQueryScope';
import {AccessReviewInactiveUsersQueryScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInactiveUsersQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInactiveUsersQueryScope;
}
