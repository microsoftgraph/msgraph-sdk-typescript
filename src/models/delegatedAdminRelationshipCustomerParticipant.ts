import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipCustomerParticipant extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The display name of the customer tenant as set by Azure AD. Read-only
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The Azure AD-assigned tenant ID of the customer tenant.
     */
    tenantId?: string | undefined;
}
