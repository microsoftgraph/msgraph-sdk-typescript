import type {AccessReviewInactiveUsersQueryScope} from './accessReviewInactiveUsersQueryScope';
import {serializeAccessReviewQueryScope} from './serializeAccessReviewQueryScope';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInactiveUsersQueryScope(writer: SerializationWriter, accessReviewInactiveUsersQueryScope: AccessReviewInactiveUsersQueryScope | undefined = {} as AccessReviewInactiveUsersQueryScope) : void {
        serializeAccessReviewQueryScope(writer, accessReviewInactiveUsersQueryScope)
        writer.writeDurationValue("inactiveDuration", accessReviewInactiveUsersQueryScope.inactiveDuration);
}
