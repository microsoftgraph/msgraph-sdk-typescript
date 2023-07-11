import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AdminConsentRequestPolicy extends Entity, Parsable {
    /**
     * Specifies whether the admin consent request feature is enabled or disabled. Required.
     */
    isEnabled?: boolean | undefined;
    /**
     * Specifies whether reviewers will receive notifications. Required.
     */
    notifyReviewers?: boolean | undefined;
    /**
     * Specifies whether reviewers will receive reminder emails. Required.
     */
    remindersEnabled?: boolean | undefined;
    /**
     * Specifies the duration the request is active before it automatically expires if no decision is applied.
     */
    requestDurationInDays?: number | undefined;
    /**
     * The list of reviewers for the admin consent. Required.
     */
    reviewers?: AccessReviewReviewerScope[] | undefined;
    /**
     * Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.
     */
    version?: number | undefined;
}
