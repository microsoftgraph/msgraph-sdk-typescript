import {CrossTenantUserSyncInbound} from './crossTenantUserSyncInbound';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantIdentitySyncPolicyPartner extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Display name for the cross-tenant user synchronization policy. Use the name of the partner Azure AD (Azure Active Directory) tenant to easily identify the policy. Optional.
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Tenant identifier for the partner Azure AD organization. Read-only.
     */
    tenantId?: string | undefined;
    /**
     * Defines whether users can be synchronized from the partner tenant. Key.
     */
    userSyncInbound?: CrossTenantUserSyncInbound | undefined;
}
