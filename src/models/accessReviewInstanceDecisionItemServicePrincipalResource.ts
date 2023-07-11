import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemServicePrincipalResource extends AccessReviewInstanceDecisionItemResource, Parsable {
    /**
     * The globally unique identifier of the application to which access has been granted.
     */
    appId?: string | undefined;
}
