import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationError extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error code. For example, AzureDirectoryB2BManagementPolicyCheckFailure.
     */
    code?: string | undefined;
    /**
     * The error message. For example, Policy permitting auto-redemption of invitations not configured.
     */
    message?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The action to take to resolve the error. For example, false.
     */
    tenantActionable?: boolean | undefined;
}
