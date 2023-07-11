import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditActor extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Name of the Application.
     */
    applicationDisplayName?: string | undefined;
    /**
     * AAD Application Id.
     */
    applicationId?: string | undefined;
    /**
     * Actor Type.
     */
    auditActorType?: string | undefined;
    /**
     * IPAddress.
     */
    ipAddress?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Service Principal Name (SPN).
     */
    servicePrincipalName?: string | undefined;
    /**
     * User Id.
     */
    userId?: string | undefined;
    /**
     * List of user permissions when the audit was performed.
     */
    userPermissions?: string[] | undefined;
    /**
     * User Principal Name (UPN).
     */
    userPrincipalName?: string | undefined;
}
