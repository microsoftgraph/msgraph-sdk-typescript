import {IdentitySource} from './identitySource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AzureActiveDirectoryTenant extends Partial<AdditionalDataHolder>, IdentitySource, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the Azure Active Directory tenant. Read only. */
    displayName?: string | undefined;
    /** The ID of the Azure Active Directory tenant. Read only. */
    tenantId?: string | undefined;
}
