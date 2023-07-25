import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

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
     * The number of units that are locked out because the customer cancelled their subscription of the service SKU.
     */
    lockedOut?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted.
     */
    suspended?: number | undefined;
    /**
     * The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state).
     */
    warning?: number | undefined;
}
