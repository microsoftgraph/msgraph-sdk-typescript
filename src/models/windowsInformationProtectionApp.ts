import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionApp extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If true, app is denied protection or exemption.
     */
    denied?: boolean | undefined;
    /**
     * The app's description.
     */
    description?: string | undefined;
    /**
     * App display name.
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The product name.
     */
    productName?: string | undefined;
    /**
     * The publisher name
     */
    publisherName?: string | undefined;
}
