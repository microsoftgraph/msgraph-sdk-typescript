
export interface GeoCoordinates{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Optional. The altitude (height), in feet,  above sea level for the item. Read-only. */
    altitude?:number | undefined;
    /** Optional. The latitude, in decimal, for the item. Writable on OneDrive Personal. */
    latitude?:number | undefined;
    /** Optional. The longitude, in decimal, for the item. Writable on OneDrive Personal. */
    longitude?:number | undefined;
}
