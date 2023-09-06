import { type AccessReviewInactiveUsersQueryScope } from './accessReviewInactiveUsersQueryScope';
import { deserializeIntoAccessReviewQueryScope } from './deserializeIntoAccessReviewQueryScope';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInactiveUsersQueryScope(accessReviewInactiveUsersQueryScope: AccessReviewInactiveUsersQueryScope | undefined = {} as AccessReviewInactiveUsersQueryScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewQueryScope(accessReviewInactiveUsersQueryScope),
        "inactiveDuration": n => { accessReviewInactiveUsersQueryScope.inactiveDuration = n.getDurationValue(); },
    }
}
