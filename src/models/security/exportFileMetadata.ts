import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExportFileMetadata extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The downloadUrl property
     */
    downloadUrl?: string | undefined;
    /**
     * The fileName property
     */
    fileName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The size property
     */
    size?: number | undefined;
}
