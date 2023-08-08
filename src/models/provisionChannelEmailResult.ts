import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionChannelEmailResult extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Represents the provisioned email address.
     */
    email?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
