import {AccessReviewScope} from './accessReviewScope';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrincipalResourceMembershipsScope extends AccessReviewScope, Parsable {
    /**
     * Defines the scopes of the principals whose access to resources are reviewed in the access review.
     */
    principalScopes?: AccessReviewScope[] | undefined;
    /**
     * Defines the scopes of the resources for which access is reviewed.
     */
    resourceScopes?: AccessReviewScope[] | undefined;
}
