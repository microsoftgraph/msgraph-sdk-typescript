import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Album extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Unique identifier of the [driveItem][] that is the cover of the album.
     */
    coverImageItemId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
