import {AccessReviewInactiveUsersQueryScope} from './accessReviewInactiveUsersQueryScope';
import {serializeAccessReviewQueryScope} from './serializeAccessReviewQueryScope';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInactiveUsersQueryScope(writer: SerializationWriter, accessReviewInactiveUsersQueryScope: AccessReviewInactiveUsersQueryScope | undefined = {} as AccessReviewInactiveUsersQueryScope) : void {
        serializeAccessReviewQueryScope(writer, accessReviewInactiveUsersQueryScope)
        writer.writeDurationValue("inactiveDuration", accessReviewInactiveUsersQueryScope.inactiveDuration);
}
