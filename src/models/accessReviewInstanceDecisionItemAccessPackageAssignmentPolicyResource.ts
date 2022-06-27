import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource extends AccessReviewInstanceDecisionItemResource, Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Display name of the access package to which access has been granted. */
    accessPackageDisplayName?: string | undefined;
    /** Identifier of the access package to which access has been granted. */
    accessPackageId?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
