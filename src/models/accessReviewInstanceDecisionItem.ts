import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {Entity} from './entity';
import {GovernanceInsight} from './governanceInsight';
import {Identity} from './identity';
import {UserIdentity} from './userIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItem extends Entity, Parsable {
    /**
     * The identifier of the accessReviewInstance parent. Supports $select. Read-only.
     */
    accessReviewId?: string | undefined;
    /**
     * The identifier of the user who applied the decision. Read-only.
     */
    appliedBy?: UserIdentity | undefined;
    /**
     * The timestamp when the approval decision was applied.00000000-0000-0000-0000-000000000000 if the assigned reviewer hasn't applied the decision or it was automatically applied. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Supports $select. Read-only.
     */
    appliedDateTime?: Date | undefined;
    /**
     * The result of applying the decision. Possible values: New, AppliedSuccessfully, AppliedWithUnknownFailure, AppliedSuccessfullyButObjectNotFound and ApplyNotSupported. Supports $select, $orderby, and $filter (eq only). Read-only.
     */
    applyResult?: string | undefined;
    /**
     * Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow. Supports $select, $orderby, and $filter (eq only).
     */
    decision?: string | undefined;
    /**
     * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
     */
    insights?: GovernanceInsight[] | undefined;
    /**
     * Justification left by the reviewer when they made the decision.
     */
    justification?: string | undefined;
    /**
     * Every decision item in an access review represents a principal's access to a resource. This property represents details of the principal. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is 'Bob' and the resource is 'Sales'. Principals can be of two types - userIdentity and servicePrincipalIdentity. Supports $select. Read-only.
     */
    principal?: Identity | undefined;
    /**
     * A link to the principal object. For example, https://graph.microsoft.com/v1.0/users/a6c7aecb-cbfd-4763-87ef-e91b4bd509d9. Read-only.
     */
    principalLink?: string | undefined;
    /**
     * A system-generated recommendation for the approval decision based off last interactive sign-in to tenant. Recommend approve if sign-in is within thirty days of start of review. Recommend deny if sign-in is greater than thirty days of start of review. Recommendation not available otherwise. Possible values: Approve, Deny, or NoInfoAvailable. Supports $select, $orderby, and $filter (eq only). Read-only.
     */
    recommendation?: string | undefined;
    /**
     * Every decision item in an access review represents a principal's access to a resource. This property represents details of the resource. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is Bob and the resource is 'Sales'. Resources can be of multiple types. See accessReviewInstanceDecisionItemResource. Read-only.
     */
    resource?: AccessReviewInstanceDecisionItemResource | undefined;
    /**
     * A link to the resource. For example, https://graph.microsoft.com/v1.0/servicePrincipals/c86300f3-8695-4320-9f6e-32a2555f5ff8. Supports $select. Read-only.
     */
    resourceLink?: string | undefined;
    /**
     * The identifier of the reviewer.00000000-0000-0000-0000-000000000000 if the assigned reviewer hasn't reviewed. Supports $select. Read-only.
     */
    reviewedBy?: UserIdentity | undefined;
    /**
     * The timestamp when the review decision occurred. Supports $select. Read-only.
     */
    reviewedDateTime?: Date | undefined;
}
