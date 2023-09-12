import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface MacOSIncludedApp extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The bundleId of the app. This maps to the CFBundleIdentifier in the app's bundle configuration.
     */
    bundleId?: string | undefined;
    /**
     * The version of the app. This maps to the CFBundleShortVersion in the app's bundle configuration.
     */
    bundleVersion?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
