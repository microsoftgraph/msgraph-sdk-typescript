import {CrossTenantUserSyncInbound} from './crossTenantUserSyncInbound';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantIdentitySyncPolicyPartner extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The displayName property */
    displayName?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The tenantId property */
    tenantId?: string | undefined;
    /** The userSyncInbound property */
    userSyncInbound?: CrossTenantUserSyncInbound | undefined;
}
