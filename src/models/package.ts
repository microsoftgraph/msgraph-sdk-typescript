
export interface Package{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A string indicating the type of package. While oneNote is the only currently defined value, you should expect other package types to be returned and handle them accordingly. */
    type?:string | undefined;
}
