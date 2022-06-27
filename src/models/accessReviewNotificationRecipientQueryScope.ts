import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewNotificationRecipientQueryScope extends AccessReviewNotificationRecipientScope, Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** This represents the query for who the recipients are. For example, /groups/{group id}/members for group members and /users/{user id} for a specific user. */
    query?: string | undefined;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query that is, ./manager) is specified. */
    queryRoot?: string | undefined;
    /** Indicates the type of query. Allowed value is MicrosoftGraph. */
    queryType?: string | undefined;
}
