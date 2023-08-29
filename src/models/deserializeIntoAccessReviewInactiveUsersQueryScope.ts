import type {AccessReviewInactiveUsersQueryScope} from './accessReviewInactiveUsersQueryScope';
import {deserializeIntoAccessReviewQueryScope} from './deserializeIntoAccessReviewQueryScope';
import {Duration} from '@microsoft/kiota-abstractions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInactiveUsersQueryScope(accessReviewInactiveUsersQueryScope: AccessReviewInactiveUsersQueryScope | undefined = {} as AccessReviewInactiveUsersQueryScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewQueryScope(accessReviewInactiveUsersQueryScope),
        "inactiveDuration": n => { accessReviewInactiveUsersQueryScope.inactiveDuration = n.getDurationValue(); },
    }
}
