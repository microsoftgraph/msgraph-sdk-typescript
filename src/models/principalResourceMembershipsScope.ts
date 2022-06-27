import {AccessReviewScope} from './accessReviewScope';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrincipalResourceMembershipsScope extends AccessReviewScope, Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Defines the scopes of the principals whose access to resources are reviewed in the access review. */
    principalScopes?: AccessReviewScope[] | undefined;
    /** Defines the scopes of the resources for which access is reviewed. */
    resourceScopes?: AccessReviewScope[] | undefined;
}
