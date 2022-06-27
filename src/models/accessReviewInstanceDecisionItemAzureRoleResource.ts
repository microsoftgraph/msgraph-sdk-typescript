import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemAzureRoleResource extends AccessReviewInstanceDecisionItemResource, Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Details of the scope this role is associated with. */
    scope?: AccessReviewInstanceDecisionItemResource | undefined;
}
