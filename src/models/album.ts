
export interface Album{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Unique identifier of the [driveItem][] that is the cover of the album. */
    coverImageItemId?:string | undefined;
}
