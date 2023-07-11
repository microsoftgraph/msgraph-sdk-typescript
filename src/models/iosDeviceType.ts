import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosDeviceType extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Whether the app should run on iPads.
     */
    iPad?: boolean | undefined;
    /**
     * Whether the app should run on iPhones and iPods.
     */
    iPhoneAndIPod?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
