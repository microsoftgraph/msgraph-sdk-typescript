import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FileSystemInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The UTC date and time the file was created on a client.
     */
    createdDateTime?: Date | undefined;
    /**
     * The UTC date and time the file was last accessed. Available for the recent file list only.
     */
    lastAccessedDateTime?: Date | undefined;
    /**
     * The UTC date and time the file was last modified on a client.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
