import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource extends AccessReviewInstanceDecisionItemResource, Parsable {
    /**
     * Display name of the access package to which access has been granted.
     */
    accessPackageDisplayName?: string | undefined;
    /**
     * Identifier of the access package to which access has been granted.
     */
    accessPackageId?: string | undefined;
}
