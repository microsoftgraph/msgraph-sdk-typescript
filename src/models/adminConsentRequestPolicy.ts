import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AdminConsentRequestPolicy extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Specifies whether the admin consent request feature is enabled or disabled. Required. */
    isEnabled?: boolean | undefined;
    /** Specifies whether reviewers will receive notifications. Required. */
    notifyReviewers?: boolean | undefined;
    /** Specifies whether reviewers will receive reminder emails. Required. */
    remindersEnabled?: boolean | undefined;
    /** Specifies the duration the request is active before it automatically expires if no decision is applied. */
    requestDurationInDays?: number | undefined;
    /** Required. */
    reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Specifies the version of this policy. When the policy is updated, this version is updated. Read-only. */
    version?: number | undefined;
}
