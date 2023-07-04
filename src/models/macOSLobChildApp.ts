import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSLobChildApp extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The build number of the app.
     */
    buildNumber?: string | undefined;
    /**
     * The bundleId of the app.
     */
    bundleId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The version number of the app.
     */
    versionNumber?: string | undefined;
}
