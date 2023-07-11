import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewReviewer} from './accessReviewReviewer';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewScope} from './accessReviewScope';
import {AccessReviewStage} from './accessReviewStage';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstance extends Entity, Parsable {
    /**
     * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
     */
    contactedReviewers?: AccessReviewReviewer[] | undefined;
    /**
     * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
     */
    decisions?: AccessReviewInstanceDecisionItem[] | undefined;
    /**
     * DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     */
    endDateTime?: Date | undefined;
    /**
     * This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. Supports $select.
     */
    fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /**
     * This collection of access review scopes is used to define who the reviewers are. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     */
    reviewers?: AccessReviewReviewerScope[] | undefined;
    /**
     * Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only.
     */
    scope?: AccessReviewScope | undefined;
    /**
     * If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
     */
    stages?: AccessReviewStage[] | undefined;
    /**
     * DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     */
    startDateTime?: Date | undefined;
    /**
     * Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only.
     */
    status?: string | undefined;
}
