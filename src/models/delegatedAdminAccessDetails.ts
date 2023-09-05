import { type UnifiedRole } from './unifiedRole';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface DelegatedAdminAccessDetails extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The directory roles that the Microsoft partner is assigned in the customer tenant.
     */
    unifiedRoles?: UnifiedRole[] | undefined;
}
