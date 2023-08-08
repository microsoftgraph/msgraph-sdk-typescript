import type {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemAzureRoleResource extends AccessReviewInstanceDecisionItemResource, Parsable {
    /**
     * Details of the scope this role is associated with.
     */
    scope?: AccessReviewInstanceDecisionItemResource | undefined;
}
