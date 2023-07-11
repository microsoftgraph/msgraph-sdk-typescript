import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewNotificationRecipientQueryScope extends AccessReviewNotificationRecipientScope, Parsable {
    /**
     * Represents the query for who the recipients are. For example, /groups/{group id}/members for group members and /users/{user id} for a specific user.
     */
    query?: string | undefined;
    /**
     * In the scenario where reviewers need to be specified dynamically, indicates the relative source of the query. This property is only required if a relative query (that is, ./manager) is specified.
     */
    queryRoot?: string | undefined;
    /**
     * Indicates the type of query. Allowed value is MicrosoftGraph.
     */
    queryType?: string | undefined;
}
