import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessClientApplications extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Service principal IDs excluded from the policy scope. */
    excludeServicePrincipals?: string[] | undefined;
    /** Service principal IDs included in the policy scope, or ServicePrincipalsInMyTenant. */
    includeServicePrincipals?: string[] | undefined;
}
