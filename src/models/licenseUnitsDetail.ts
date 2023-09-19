import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface LicenseUnitsDetail extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number of units that are enabled for the active subscription of the service SKU.
     */
    enabled?: number | undefined;
    /**
     * The number of units that are locked out because the customer canceled their subscription of the service SKU.
     */
    lockedOut?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The number of units that are suspended because the subscription of the service SKU has been canceled. The units can't be assigned but can still be reactivated before they're deleted.
     */
    suspended?: number | undefined;
    /**
     * The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it's canceled (moved to a suspended state).
     */
    warning?: number | undefined;
}
