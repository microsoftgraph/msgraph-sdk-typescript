import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VppLicensingType extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Whether the program supports the device licensing type.
     */
    supportsDeviceLicensing?: boolean | undefined;
    /**
     * Whether the program supports the user licensing type.
     */
    supportsUserLicensing?: boolean | undefined;
}
