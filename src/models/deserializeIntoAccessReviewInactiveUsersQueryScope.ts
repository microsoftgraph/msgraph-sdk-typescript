import {AccessReviewInactiveUsersQueryScope} from './accessReviewInactiveUsersQueryScope';
import {deserializeIntoAccessReviewQueryScope} from './deserializeIntoAccessReviewQueryScope';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInactiveUsersQueryScope(accessReviewInactiveUsersQueryScope: AccessReviewInactiveUsersQueryScope | undefined = {} as AccessReviewInactiveUsersQueryScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewQueryScope(accessReviewInactiveUsersQueryScope),
        "inactiveDuration": n => { accessReviewInactiveUsersQueryScope.inactiveDuration = n.getDurationValue(); },
    }
}
