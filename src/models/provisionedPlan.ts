import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionedPlan extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * For example, 'Enabled'.
     */
    capabilityStatus?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * For example, 'Success'.
     */
    provisioningStatus?: string | undefined;
    /**
     * The name of the service; for example, 'AccessControlS2S'
     */
    service?: string | undefined;
}
