import {AccessReviewExpirationBehavior} from './accessReviewExpirationBehavior';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentReviewSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The default decision to apply if the access is not reviewed. The possible values are: keepAccess, removeAccess, acceptAccessRecommendation, unknownFutureValue.
     */
    expirationBehavior?: AccessReviewExpirationBehavior | undefined;
    /**
     * This collection specifies the users who will be the fallback reviewers when the primary reviewers don't respond.
     */
    fallbackReviewers?: SubjectSet[] | undefined;
    /**
     * If true, access reviews are required for assignments through this policy.
     */
    isEnabled?: boolean | undefined;
    /**
     * Specifies whether to display recommendations to the reviewer. The default value is true.
     */
    isRecommendationEnabled?: boolean | undefined;
    /**
     * Specifies whether the reviewer must provide justification for the approval. The default value is true.
     */
    isReviewerJustificationRequired?: boolean | undefined;
    /**
     * Specifies whether the principals can review their own assignments.
     */
    isSelfReview?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * This collection specifies the users or group of users who will review the access package assignments.
     */
    primaryReviewers?: SubjectSet[] | undefined;
    /**
     * When the first review should start and how often it should recur.
     */
    schedule?: EntitlementManagementSchedule | undefined;
}
