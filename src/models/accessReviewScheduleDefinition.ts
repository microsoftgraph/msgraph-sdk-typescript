import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewNotificationRecipientItem} from './accessReviewNotificationRecipientItem';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import {AccessReviewScope} from './accessReviewScope';
import {Entity} from './entity';
import {UserIdentity} from './userIdentity';

export interface AccessReviewScheduleDefinition extends Entity{
    /** Defines the list of additional users or group members to be notified of the access review progress. */
    additionalNotificationRecipients?:AccessReviewNotificationRecipientItem[] | undefined;
    /** User who created this review. Read-only. */
    createdBy?:UserIdentity | undefined;
    /** Timestamp when the access review series was created. Supports $select. Read-only. */
    createdDateTime?:Date | undefined;
    /** Description provided by review creators to provide more context of the review to admins. Supports $select. */
    descriptionForAdmins?:string | undefined;
    /** Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select. */
    descriptionForReviewers?:string | undefined;
    /** Name of the access review series. Supports $select and $orderBy. Required on create. */
    displayName?:string | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property. */
    fallbackReviewers?:AccessReviewReviewerScope[] | undefined;
    /** This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API. */
    instanceEnumerationScope?:AccessReviewScope | undefined;
    /** Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence. */
    instances?:AccessReviewInstance[] | undefined;
    /** Timestamp when the access review series was last modified. Supports $select. Read-only. */
    lastModifiedDateTime?:Date | undefined;
    /** This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property. */
    reviewers?:AccessReviewReviewerScope[] | undefined;
    /** Defines the entities whose access is reviewed. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API. */
    scope?:AccessReviewScope | undefined;
    /** The settings for an access review series, see type definition below. Supports $select. Required on create. */
    settings?:AccessReviewScheduleSettings | undefined;
    /** This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only. */
    status?:string | undefined;
}
