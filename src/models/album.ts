import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Album extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Unique identifier of the [driveItem][] that is the cover of the album. */
    coverImageItemId?: string | undefined;
}
