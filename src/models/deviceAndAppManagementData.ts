import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Not yet documented
     */
    content?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
